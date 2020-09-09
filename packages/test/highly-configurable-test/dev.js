const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

function startDevServer(webpackConfigPath) {
  const webpackConfig = require(webpackConfigPath);
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
}

startDevServer(path.join(__dirname, './webpack.config.js'));

