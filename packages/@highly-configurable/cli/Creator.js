const {
  execa,

  chalk,
  clearConsole,
  log,
} = require('@highly-configurable/cli-shared-utils');
const getVersions = require('./util/getVersions');
const writeFileTree = require('./util/writeFileTree');
const Templator = require('./Templator');
const path = require('path');
const fs = require('fs-extra');

module.exports = class Creator {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  async create(options) {
    const {
      name,
      context,
    } = this;

    const {
      current,
      latestMinor,
    } = await getVersions();

    let title = chalk.bold.blue(`Highly Configurable CLI v${current}`);
    if (process.env.HIGHLY_CONFIGURABLE_CLI_TEST === true) {
      title += ' ' + chalk.magenta.bold('TEST');
    } else if (process.env.HIGHLY_CONFIGURABLE_CLI_DEBUG_OR_TEST === true) {
      title += ' ' + chalk.magenta.bold('DEBUG');
    }
    clearConsole(title);
    log(`✨  Creating project in ${chalk.yellow(context)}.`)

    /**
     * devDependencies
     */
    const pkg = {
      name,
      version: '0.1.0',
      private: true,
      scripts: {
        prebuild: 'rm -rf dist',
        serve: 'highly-configurable-cli-service serve',
        build: 'highly-configurable-cli-service build',
        inspect: 'highly-configurable-cli-service inspect'
      },
      devDependencies: {
        '@highly-configurable/cli-service': `^${latestMinor}`,
      },
    };

    await writeFileTree(context, {
      'package.json': JSON.stringify(pkg, null, 2),
    });

    log(`⚙\u{fe0f}  Installing CLI depencies. This might take a while...`);
    log();

    if (process.env.HIGHLY_CONFIGURABLE_CLI_DEBUG_OR_TEST) {
      const target = path.resolve(context, 'node_modules/.bin/highly-configurable-cli-service');
      await fs.ensureDir(path.dirname(target));
      await fs.symlink(require.resolve('@highly-configurable/cli-service/bin/highly-configurable-cli-service'), target);
      await fs.chmod(target, '755');
    } else {
      await this.run('yarn');
    }

    /**
     * template
     */
    log(`🚀 Writing templates...`);
    const templator = new Templator(context, {
      templatePath: path.resolve(__dirname, './template'),
      renderData: {},
    });
    await templator.render();

    // log instructions
    log();
    log(`🎉  Successfully created project ${chalk.yellow(name)}.`);
    log(
      `👉  Get started with the following commands:\n\n` +
      chalk.cyan(` ${chalk.gray('$')} cd ${name}\n`) +
      chalk.cyan(` ${chalk.gray('$')} yarn serve`)
    );
    log();
  }

  run(command, args = []) {
    return execa(command, args, {
      cwd: this.context,
      stdio: 'inherit',
    });
  }
}

