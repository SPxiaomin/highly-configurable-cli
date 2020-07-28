/**
 * @description entry / output / html / static related
 */

module.exports = (webpackConfig, service) => {
  webpackConfig
    .context(service.context)
    .entry('app')
      .add('./src/main.js')
      .end()
};

