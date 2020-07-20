/**
 * @description core service for run command
 */

const path = require('path');
const fs = require('fs');
const Module = require('module');
const { validate, error } = require('@highly-configurable/cli-shared-utils');

module.exports = class Service {
  constructor(context) {
    this.context = context;
    this.projectOptions = null;
  }

  // init & run command
  run() {
    this.init();


  }

  // load user option & register command
  init() {
    this.projectOptions = this.loadUserOptions();
  }

  loadUserOptions() {
    const configPath = path.resolve(this.context, './highly-configurable.config.js');
    let fileConfig;
    if (fs.existsSync(configPath)) {
      fileConfig = Module.createRequire(path.resolve(this.context, 'package.json'))('./highly-configurable.config.js');

      validate(fileConfig, (message) => {
        error(`Invalid options in ${chalk.bold('highly-configurable.config.js')}: ${message}`);
      });
    }
  }
}

new Service().run();
