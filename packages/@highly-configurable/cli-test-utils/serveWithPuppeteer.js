const launchPuppeteer = require('./launchPuppeteer');

function createHelpers(page) {
  return {
    getText: selector => page.evaluate((selector) => {
      return document.querySelector(selector).textContent;
    }, selector),

    hasElement: selector => page.evaluate((selector) => {
      return !!document.querySelector(selector);
    }, selector),

    hasClass: (selector, cls) => page.evaluate((selector, cls) => {
      const el = document.querySelector(selector);
      return el && el.classList.contains(cls);
    }, selector, cls),
  };
}

module.exports = async function serveWithPuppeteer(serve, test) {
  let notifyUpdate;
  const nextUpdate = () => {
    return new Promise((resolve) => {
      notifyUpdate = resolve;
    });
  };

  await new Promise((resolve, reject) => {
    const childProcess = serve();
    
    /**
     * child stdout data:
     * 1. template compile with error.
     * 2. template first compile.
     * 3. hot reload.
     */
    let isFirstMatch = true;
    childProcess.stdout.on('data', (data) => {
      data = data.toString();

      const urlMatch = data.match(/http:\/\/[^/]+\//);

      if (data.match(/Failed to compile/)) {
        childProcess.kill();
        reject(data);
      } else if (urlMatch && isFirstMatch) {
        isFirstMatch = false;
        let url = urlMatch[0];

        const {
          page,
          browser,
          requestUrls,
        } = await launchPuppeteer(url);

        const helpers = createHelpers(page);

        await test({
          browser,
          page,
          url,
          nextUpdate,
          helpers,
          requestUrls,
        });

        await browser.close();
        childProcess.kill();
        resolve();
      } else if (data.match(/App updated/)) {
        if (notifyUpdate) {
          notifyUpdate();
        }
      }
    });

    // child exit non-0（cli-service or webpack config with error cause process on-start error）
    childProcess.on('exit', (code) => {
      if (code !== 0) {
        reject(`serve exited with code ${code}`);
      }
    });
  });
};
