/**
 * @description core service for run command
 */

const path = require('path');
const fs = require('fs');
const Module = require('module');
const { validate, error, chalk } = require('@highly-configurable/cli-shared-utils');
const debug = require('debug');

module.exports = class Service {
  constructor(context) {
    // the root working dir
    this.context = context;
    // custom user options
    this.projectOptions = null;
    // cli service commands
    this.commands = {};
  }

  // init & run command
  run(name, args = {}, rawArgs = []) {
    this.init();

    let command = this.commands[name];

    if (!command && name) {
      error(`command "${name}" does not exist.`);
      process.exit(1);
    }

    const { fn } = command;
    return fn(args, rawArgs);
  }

  // load user option & register command
  init() {
    this.projectOptions = this.loadUserOptions();

    this.registerCommands();
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
      // './commands/help',
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
}
