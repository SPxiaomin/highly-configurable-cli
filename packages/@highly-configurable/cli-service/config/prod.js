/**
 * @description prod related
 */

module.exports = (webpackConfig, service) => {
  webpackConfig.mode('production');

  webpackConfig.devtool('source-map');

  // js lint async false
  webpackConfig
    .plugin('fork-ts-checker')
    .tap((args) => {
      return [{
        ...args[0],
        async: false,
      }]
    });

  // css extract loader & plugin
  webpackConfig.module
    .rule('css')
      .uses
      .delete('style-loader');

  webpackConfig.module
    .rule('mini-css-extract-plugin-loader')
      .test(/\.css$/)
      .post()
      .use('mini-css-extract-plugin-loader')
        .loader(require('mini-css-extract-plugin').loader);

  webpackConfig
    .plugin('mini-css-extract-plugin')
    .use(require('mini-css-extract-plugin'), [{
      filename: '[name].[hash].css',
    }]);
};
