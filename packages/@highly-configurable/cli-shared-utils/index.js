[
  'logger',
  'validate',
].forEach((module) => {
  Object.assign(exports, require(`./lib/${module}`));
});

exports.semver = require('semver');
exports.chalk = require('chalk');
