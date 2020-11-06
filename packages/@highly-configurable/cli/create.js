const path = require('path');
const validateProjectName = require('validate-npm-package-name');
const { chalk, error } = require('@highly-configurable/cli-shared-utils')
const Creator = require('./Creator');

async function create(projectName, options) {
  const cwd = process.cwd();
  const targetDir = path.resolve(cwd, projectName);

  const result = validateProjectName(projectName);
  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${projectName}"`));
    result.errors && result.errors.forEach((error) => {
      console.error(chalk.red.dim(`Error: ${error}`));
    });
    result.warnings && result.warnings.forEach((warning) => {
      console.error(chalk.red.dim(`Warning: ${warning}`));
    });
    process.exit(1);
  }

  const creator = new Creator(projectName, targetDir);
  await creator.create(options);
}

module.exports = (...args) => {
  return create(...args)
    .catch((err) => {
      error(err);
      process.exit(1);
    });
};
