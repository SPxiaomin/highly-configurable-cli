jest.setTimeout(80000);

const create = require('@highly-configurable/cli-test-utils/createTestProject');
const serve = require('@highly-configurable/cli-test-utils/serveWithPuppeteer');

test('serve', async () => {
  const project = await create('e2e-serve');

  await serve(
    () => project.run('highly-configurable-cli-service', ['serve']),
    async ({ page, nextUpdate, helpers }) => {
      const msg = 'Welcome to Your App';
      expect(await helpers.getText('h1')).toMatch(msg);

      // test hot reload
      const file = await project.read('src/components/HelloWorld.tsx');
      project.write('src/components/HelloWorld.tsx', file.replace(msg, 'Updated'));
      await nextUpdate();
      await page.waitForFunction((selector) => {
        const el = document.querySelector(selector);
        return el && el.textContent.includes('Updated');
      }, { timeout: 60000 }, 'h1');
    },
  );
});
