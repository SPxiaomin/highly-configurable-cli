/**
 * @description dev related
 */

module.exports = (webpackConfig, service) => {
  webpackConfig.mode('development');

  webpackConfig.devtool('inline-source-map');
};
