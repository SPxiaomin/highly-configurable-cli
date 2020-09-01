/**
 * @description core service for run command
 */

const path = require('path');
const fs = require('fs');
const Module = require('module');
const { validate, error, chalk } = require('@highly-configurable/cli-shared-utils');
const debug = require('debug');
const Config = require('webpack-chain');

module.exports = class Service {
  constructor(context) {
    // the root working dir
    this.context = context;
    // cli service commands
    this.commands = {};

    // custom user options
    this.projectOptions = null;
  }

  // init & run command
  run(name, args = {}, rawArgs = []) {
    this.init(name);

    let command = this.commands[name];

    if (!command && name) {
      error(`command "${name}" does not exist.`);
      process.exit(1);
    }

    const { fn } = command;
    return fn(args, rawArgs, this);
  }

  // load user option & register command
  init(name) {
    this.setEnv(name);

    this.projectOptions = this.loadUserOptions();

    this.registerCommands();
  }

  setEnv(name) {
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = {
        serve: 'development',
        build: 'production',
      }[name];
    }
  }

  loadUserOptions() {
    const configPath = path.resolve(this.context, './highly-configurable.config.js');
    let fileConfig;
    if (fs.existsSync(configPath)) {
      // fileConfig = Module.createRequire(path.resolve(this.context, 'package.json'))('./highly-configurable.config.js');
      fileConfig = require(configPath);
      debug('cli-service:fileConfig')(fileConfig);

      validate(fileConfig, (message) => {
        error(`Invalid options in ${chalk.bold('highly-configurable.config.js')}: ${message}`);
      });
    }
  }

  registerCommands() {
    const commands = [
      './commands/serve',
      // './commands/build',
      // './commands/inspect',
    ];

    commands.forEach((command) => {
      const {
        name,
        help,
        fn,
      } = require(command)(this.projectOptions);

      this.commands[name] = {
        fn, 
        help,
      };
    });
  }

  resolveWebpackConfig() {
    const chainableConfig = new Config();
    require('./config/base.js')(chainableConfig, this);

    chainableConfig.mode('development');

    return chainableConfig.toConfig();
  }
}
