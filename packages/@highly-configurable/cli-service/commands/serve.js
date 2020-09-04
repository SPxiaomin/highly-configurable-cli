module.exports = (options) => {
  return {
    name: 'serve',
    help: {},
    fn: (args, rawArgs, service) => {
      const webpack = require('webpack');
      const WebpackDevServer = require('webpack-dev-server');

      const webpackConfig = service.resolveWebpackConfig();
      const hotOptions = {
        publicPath: webpackConfig.output
          ? webpackConfig.output.publicPath
          : '',
        hot: true,
      };

      WebpackDevServer.addDevServerEntrypoints(webpackConfig, hotOptions);
      new WebpackDevServer(webpack(webpackConfig), hotOptions).listen(7000);
    },
  };
};
