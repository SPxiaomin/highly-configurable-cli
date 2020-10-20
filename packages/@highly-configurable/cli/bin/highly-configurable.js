// #!/usr/bin/env node

// const program = require('commander');
// const inquirer = require('inquirer');

// program
//   .command('create <app-name>')
//   .description('create a new project powered by highly-configurable-cli-service')
//   .action((name, cmd) => {
//     console.log('<=========');
//     console.log(name, cmd);
//   });

// program.parse(process.argv);

const { extractCallDir} = require('../util/index');

function render() {
  console.log(extractCallDir());
}

exports.render = render;
