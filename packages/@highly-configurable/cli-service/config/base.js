/**
 * @description entry / output / html / static related
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, service) => {
  // entry & output
  webpackConfig
    .context(service.context)
    .entry('app')
      .add('./src/main.js')
      .end()
    .output
      .filename('[name].[hash].js')
      .path(path.resolve(service.context, './dist'))
      .end();

  // html
  webpackConfig
    .plugin('html')
    .use(HtmlWebpackPlugin, [{
      filename: 'app.html',
      template: path.resolve(service.context, './public/index.html'),
    }]);

  // static assets
  webpackConfig.module
    .rule('image')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('url-loader')
        .loader(require.resolve('url-loader'))
        .options({
          limit: 8192,
        });

  // resolve extensions
  webpackConfig.resolve
    .extensions
    .merge(['.tsx', '.ts', '.js']);
  
  // resolve alias
  webpackConfig.resolve
    .alias
    .set('@', path.resolve(service.context, 'src'));

  // externals
  webpackConfig.externals({
    react: 'React',
    'react-dom': 'ReactDOM',
    axios: 'axios',
  });

  // js
  webpackConfig.module
    .rule('js')
      .test(/\.tsx?$/)
      .use('babel-loader')
        .loader(require.resolve('babel-loader'));

  webpackConfig
    .plugin('fork-ts-checker')
    .use(require('fork-ts-checker-webpack-plugin'), [{
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      eslint: {
        files: path.resolve(service.context, './src/**/*'),
      },
    }]);

  // css
  webpackConfig.module
    .rule('css')
      .test(/\.css$/)
      .use('style-loader')
        .loader(require.resolve('style-loader'))
        .end()
      .use('css-loader')
        .loader(require.resolve('css-loader'))
        .end()
      .use('postcss-loader')
        .loader(require.resolve('postcss-loader'))
        .end();

};

