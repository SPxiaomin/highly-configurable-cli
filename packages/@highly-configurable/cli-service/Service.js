/**
 * @description core service for run command
 */

const path = require('path');
const fs = require('fs');

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
    const configPath = path.resolve(this.context, './vue.config.js');
    if (fs.existsSync(configPath)) {
      
    }
  }
}