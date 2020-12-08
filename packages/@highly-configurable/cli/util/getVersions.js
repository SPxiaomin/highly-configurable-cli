const Axios = require('axios');
const { semver } = require('@highly-configurable/cli-shared-utils');

async function getLatestVersion(packageName) {
  const { data } = await Axios.get(`https://registry.npmjs.org/${packageName}`, {
    headers: {
      accept: 'application/vnd.npm.install-v1.json',
    },
  });
  return data['dist-tags'].latest;
}

module.exports = async function getVersions() {
  const local = require('../package.json').version;
  if (process.env.HIGHLY_CONFIGURABLE_CLI_DEBUG_OR_TEST) {
    return {
      current: local,
      latest: local,
      latestMinor: local,
    };
  }

  const latest = await getLatestVersion('@highly-configurable/cli');
  let latestMinor = `${semver.major(latest)}.${semver.minor(latest)}.0`;

  // if the latest version contains breaking changes
  if (/major/.test(semver.diff(local, latest))) {
    latestMinor = local;
  }

  return {
    current: local,
    latest,
    latestMinor,
  };
};

