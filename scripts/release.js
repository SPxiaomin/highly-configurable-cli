const execa = require('execa');
const semver = require('semver');
const inquirer = require('inquirer');
const genChangelog = require('./genChangelog');
const currentVersion = require('../lerna.json').version;

process.env.HIGHLY_CONFIGURABLE_CLI_RELEASE = true;

const release = async () => {
  /**
   * 1. get version.
   * 2. generate changelog & git add
   * 3. lerna publish
   * 4. github release tag
   */

  console.log(`Current version: ${currentVersion}`);

  const bumps = ['patch', 'minor', 'major'];
  const versions = bumps.reduce((versions, b) => {
    versions[b] = semver.inc(currentVersion, b);
    return versions;
  }, {});
  const bumpChoices = bumps.map((b) => ({
    name: `${b} (${versions[b]})`,
    value: b,
  }));

  const { bump, customVersion } = await inquirer.prompt([
    {
      name: 'bump',
      message: 'Select release type',
      type: 'list',
      choices: [
        ...bumpChoices,
        { name: 'custom', value: 'custom' },
      ],
    },
    {
      name: 'customVersion',
      message: 'Input version:',
      type: 'input',
      when: answers => answers.bump === 'custom',
    },
  ]);

  const version = customVersion || versions[bump];

  await genChangelog(version);

  await execa(require('lerna/cli'), [
    'publish',
    version,
    '--force-publish',
  ], {
    stdio: 'inherit',
  });
};

release().catch((err) => {
  console.error(err);
  process.exit(1);
});


