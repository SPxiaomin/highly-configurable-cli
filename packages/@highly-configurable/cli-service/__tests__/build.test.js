jest.setTimeout(30000);

const path = require('path');
const portfinder = require('portfinder');
const createServer = require('@highly-configurable/cli-test-utils/createServer');
const create = require('@highly-configurable/cli-test-utils/createTestProject');
const launch = require('@highly-configurable/cli-test-utils/launchPuppeteer');

let server, browser;
test('build', async () => {
  const project = await create('e2e-build');

  // stop, writing here
});

afterAll(async () => {

});

