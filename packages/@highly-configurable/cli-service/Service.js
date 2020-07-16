/**
 * @description core service for run command
 */

module.exports = class Service {
  constructor(context) {
    this.context = context;

    this.webpackChainFns = [];
  }

  // init & run command
  run() {
    this.init();


  }

  // load user option & register command
  init() {
    
  }

  chainWebapck(fn) {
    this.webpackChainFns.push(fn);
  }

  resolveWebpack() {

  }
}