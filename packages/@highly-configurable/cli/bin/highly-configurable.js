#!/usr/bin/env node

const program = require('commander');

// enter debug mode when creating test repo
if (process.cwd().indexOf('/packages/test') > 0) {
  process.env.HIGHLY_CONFIGURABLE_CLI_DEBUG_OR_TEST = true;
}

program
  .version(`@highly-configurable/cli ${require('../package.json').version}`)
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('create a new project powered by highly-configurable-cli-service')
  .option('-r, --registry <url>', 'Use specified npm registry when installing dependencies')
  .action((name, cmd) => {
    require('../create')(name, cmd);
  });

program.parse(process.argv);
