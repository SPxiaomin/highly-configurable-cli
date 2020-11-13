jest.setTimeout(80000);

const launchPuppeteer = require('@highly-configurable/cli-test-utils/launchPuppeteer');

test('serve', async () => {
  // const { browser, page } =  await launchPuppeteer('https://www.baidu.com');
  // try {
  //   await page.waitForFunction(() => {
  //     return false;
  //   }, { timeout: 3000 });
  // } catch (error) {
  //   await browser.close();
  //   throw error;
  // }
  expect(1).toBe(2);
  console.log('a')
});

test('serve haha', async () => {
});
