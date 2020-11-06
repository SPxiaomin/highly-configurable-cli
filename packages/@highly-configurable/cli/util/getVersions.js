
module.exports = async function getVersions() {
  const local = require('../package.json').version;
  if (process.env.HIGHLY_CONFIGURABLE_CLI_DEBUG_OR_TEST) {
    return {
      current: local,
      latest: local,
      // stop, writing here
    };
  }
}

