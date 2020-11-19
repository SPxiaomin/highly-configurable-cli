jest.setTimeout(80000);

const create = require('@highly-configurable/cli-test-utils/createTestProject');
const serve = require('@highly-configurable/cli-test-utils/serveWithPuppeteer');

test('serve', async () => {
  const project = create('e2e-serve');

  await serve(
    () => project.run('highly-configurable-cli-service serve'),
    async ({ page, nextUpdate, helpers }) => {
      const msg = 'Welcome to Your App';
      expect(await helpers.getText('h1')).toMatch(msg);

      // test hot reload
      const file = await project.read('src/App.tsx');
      project.write('src/App.tsx', file.replace(msg, 'Updated'));
      await nextUpdate();
      await page.waitForFunction((selector) => {
        const el = document.querySelector(selector);
        return el && el.textContent.includes('Updated');
      }, { timeout: 60000 }, 'h1');
    },
  );
});
