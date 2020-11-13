const launchPuppeteer = require('./launchPuppeteer');

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
     * 1. 
     */

    // child exit non-0（cli-service with error）

    await test({
      nextUpdate,
    });


  });
};
