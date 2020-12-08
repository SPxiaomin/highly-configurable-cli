/**
 * @description dev related
 */

module.exports = (webpackConfig, service) => { // eslint-disable-line no-unused-vars
  webpackConfig.mode('development');

  webpackConfig.devtool('inline-source-map');
};
