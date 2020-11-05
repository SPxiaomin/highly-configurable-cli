const path = require('path');
const validateProjectName = require('validate-npm-package-name');
const { error } = require('@highly-configurable/cli-shared-utils')

async function create(projectName, options) {
  const cwd = process.cwd();
  const targetDir = path.resolve(cwd, projectName);

  const result = validateProjectName(projectName);
  // stop, writing here
  console.log(result);
}

module.exports = (...args) => {
  return create(...args)
    .catch((err) => {
      error(err);
      process.exit(1);
    });
};
