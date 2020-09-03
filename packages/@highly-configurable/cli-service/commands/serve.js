module.exports = (options) => {
  return {
    name: 'serve',
    help: {},
    fn: (args, rawArgs, service) => {
      const webpack = require('webpack');
      const WebpackDevServer = require('webpack-dev-server');

      const webpackConfig = service.resolveWebpackConfig();
      const options = {
        publicPath: webpackConfig.output
          ? webpackConfig.output.publicPath
          : '',
        hot: true,
      };

      WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
      new WebpackDevServer(webpack(webpackConfig), options).listen(7000);
    },
  };
};
