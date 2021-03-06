/**
 * @description core service for run command
 */

const path = require('path');
const fs = require('fs');
// const Module = require('module');
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
    this.init(name, args);

    let command = this.commands[name];

    if (!command && name) {
      error(`command "${name}" does not exist.`);
      process.exit(1);
    }

    const { fn } = command;
    return fn(args, rawArgs, this);
  }

  // load user option & register command
  init(name, args) {
    this.setEnv(name, args);

    this.projectOptions = this.loadUserOptions();

    this.registerCommands();
  }

  setEnv(name, args) {
    if (!process.env.NODE_ENV) {
      if (args.mode) {
        process.env.NODE_ENV = args.mode;
        return;
      }

      process.env.NODE_ENV = {
        serve: 'development',
        build: 'production',
        inspect: 'development',
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

    return fileConfig;
  }

  registerCommands() {
    const commands = [
      './commands/serve',
      './commands/build',
      './commands/inspect',
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

    // env related config overwrite
    switch (process.env.NODE_ENV) {
    case 'development':
      require('./config/dev.js')(chainableConfig, this);
      break;

    case 'production':
      require('./config/prod.js')(chainableConfig, this);
      break;
    }

    // user custom config overwrite
    if (this.projectOptions && this.projectOptions.chainWebpack) {
      this.projectOptions.chainWebpack(chainableConfig);
    }

    return chainableConfig.toConfig();
  }
};

