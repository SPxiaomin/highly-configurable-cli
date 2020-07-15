#!/usr/bin/env node

// node version >=12.2.0 for Module.createRequire()
const { semver, error } = require('@highly-configurable/cli-shared-utils');
const requiredVersion = require('../package.json').engines.node;

if (!semver.satisfies(process.version, requiredVersion)) {
  error(
    `You are using Node ${process.version}, but highly-configurable-cli-service ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  );
  process.exit(1);
}

