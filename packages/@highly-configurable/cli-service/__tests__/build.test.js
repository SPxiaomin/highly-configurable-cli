jest.setTimeout(30000);

const path = require('path');
const portfinder = require('portfinder');
const createServer = require('@highly-configurable/cli-test-utils/createServer');
const create = require('@highly-configurable/cli-test-utils/createTestProject');
const launch = require('@highly-configurable/cli-test-utils/launchPuppeteer');

let server, browser;
test('build', async () => {
  const project = await create('e2e-build');

  const childProcess = await project.run('highly-configurable-cli-service', ['build']);
  expect(childProcess.stdout).toMatch('Build complete');

  expect(project.has('dist/index.html')).toBe(true);
  expect(project.has('dist/css')).toBe(true);
  expect(project.has('dist/js')).toBe(true);

  const index = await project.read('dist/index.html');
  expect(index).toMatch(/<link href="css\/app\.(\w+?)\.css" rel="stylesheet">/);
  expect(index).toMatch(/<script src="js\/app\.(\w+?)\.js"><\/script>/);

  const port = await portfinder.getPortPromise();
  server = createServer({
    root: path.resolve(project.dir, 'dist'),
  });

  await new Promise((resolve, reject) => {
    server.listen(port, (error) => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });

  const launched = await launch(`http://localhost:${port}/`);
  browser = launched.browser;

  const h1Text = await launched.page.evaluate(() => {
    return document.querySelector('h1').textContent;
  });

  expect(h1Text).toMatch('Welcome to Your App');
});

afterAll(async () => {
  if (browser) {
    await browser.close();
  }

  if (server) {
    server.close();
  }
});
