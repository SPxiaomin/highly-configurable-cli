const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');

module.exports = function createTestProject(name) {
  const cwd = path.resolve(__dirname, '../../test');
  const projectRoot = path.resolve(cwd, name);

  const read = (file) => {
    return fs.readFile(path.resolve(projectRoot, file), 'utf-8');
  };

  const has = (file) => {
    return fs.existsSync(path.resolve(projectRoot, file));
  };

  const write = (file, content) => {
    const targetPath = path.resolve(projectRoot, file);
    const dir = path.dirname(targetPath);
    return fs.ensureDir(dir).then(() => fs.writeFile(targetPath, content));
  };

  const rm = (file) => {
    return fs.remove(path.resolve(projectRoot, file));
  };

  const run = (command, args = []) => {
    if (command === 'highly-configurable-cli-service') {
      command = require.resolve('@highly-configurable/cli-service/bin/highly-configurable-cli-service');
    }

    return execa(command, args, { cwd: projectRoot, stdio: 'inherit' });
  };

  const cliBinPath = require.resolve('@highly-configurable/cli/bin/highly-configurable');

  const args = [
    'create',
    name,
  ];

  const options = {
    cwd,
    stdio: 'inherit',
  };

  return execa(cliBinPath, args, options).then(() => ({
    dir: projectRoot,
    has,
    read,
    write,
    run,
    rm,
  }));
};

