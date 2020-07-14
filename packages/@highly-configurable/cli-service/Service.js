/**
 * @description core service for run command
 */

module.exports = class Service {
  constructor() {
    this.webpackChainFns = [];
  }

  // init & run command
  run() {

  }

  // init mode & base config & 
  init() {

  }

  chainWebapck(fn) {
    this.webpackChainFns.push(fn);
  }

  resolveWebpack() {

  }
}