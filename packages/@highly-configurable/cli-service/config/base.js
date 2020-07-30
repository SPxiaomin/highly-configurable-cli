/**
 * @description entry / output / html / static related
 */

const path = require('path');

module.exports = (webpackConfig, service) => {
  webpackConfig
    .context(service.context)
    .entry('app')
      .add('./src/main.js')
      .end()
    .output
      .filename('[name].[hash].js')
      .path(path.resolve(service.context, './dist'))
      .end()
};

