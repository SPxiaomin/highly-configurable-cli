const minimist = require('minimist');
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);

let regexp;
if (args.p) {
  const packages = args.p.split(',').join('|');
  regexp = `.*@highly-configurable/(${packages})/.*\\.test\\.js$`;
  const i = rawArgs.indexOf('-p');
  rawArgs.splice(i, 2);
}

const jestArgs = [
  '--env', 'node',
  '--detectOpenHandles',
  '--runInBand',
  ...rawArgs,
  ...(regexp ? [regexp] : [])
];

console.log(`run jest with args: ${jestArgs.join(' ')}`);

require('jest').run(jestArgs);
