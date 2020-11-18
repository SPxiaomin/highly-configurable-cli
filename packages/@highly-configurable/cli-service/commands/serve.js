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
      const compiler = webpack(webpackConfig);
      const server = new WebpackDevServer(compiler, hotOptions).listen(7000);

      let isFirstCompile = true;
      compiler.hooks.done.tap('highly-configurable-cli-service serve', () => {
        if (isFirstCompile) {
          isFirstCompile = false;
          return;
        }

        if (process.env.HIGHLY_CONFIGURABLE_CLI_TEST && !isFirstCompile) {
          console.log('App updated');
        }
      });
    },
  };
};
