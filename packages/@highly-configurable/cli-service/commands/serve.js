module.exports = (options) => {
  return {
    name: 'serve',
    help: {},
    fn: (args, rawArgs, service) => {
      const path = require('path');
      const webpack = require('webpack');
      const WebpackDevServer = require('webpack-dev-server');

      const webpackConfig = service.resolveWebpackConfig();
      new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output
          ? webpackConfig.output.publicPath
          : '/static',
        hot: true,
        compress: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }).listen(7000);
    },
  };
};
