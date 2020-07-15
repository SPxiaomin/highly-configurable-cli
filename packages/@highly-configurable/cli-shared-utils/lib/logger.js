const chalk = require('chalk');

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

exports.error = (msg) => {
  console.error(format(
    chalk.bgRed(' ERROR '),
    chalk.red(msg),
  ));

  if (msg instanceof Error) {
    console.error(msg.stack);
  }
};
