const chalk = require('chalk');
const readline = require('readline');

function format(label, msg) {
  return msg
    .split('\n')
    .map((line, index) => {
      return index == 0
        ? `${label} ${line}`
        : line
    })
    .join('\n');
}

exports.log = (msg = '') => {
  console.log(msg);
};

exports.error = (msg) => {
  console.error(format(
    chalk.bgRed(' ERROR '),
    chalk.red(msg),
  ));

  if (msg instanceof Error) {
    console.error(msg.stack);
  }
};

exports.clearConsole = (title) => {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    console.log(title);
  }
};
