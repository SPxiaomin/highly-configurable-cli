'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// const merge = require('webpack-merge');
// const { ROOT_DIR } = require('../../constants/build');

const defaultConfig = {
  context: path.resolve(__dirname, '.'),
  mode: 'development',
  // mode: 'production',
  entry: {
    app: [
      './src/index.tsx',
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // plugins: [
    //   new AliasPlugin('described-resolve', [
    //     {
    //       name: '@',
    //       alias: [
    //         path.resolve(ROOT_DIR, 'src'),
    //         path.resolve(ROOT_DIR, '../pattern_render/src'),
    //       ]
    //     },
    //   ], 'resolve')
    // ],
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // antd: 'antd',
    // moment: 'moment',
    axios: 'axios',
    // 'react-color': 'ReactColor',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          // 'junmin.js',
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     // transpileOnly: true,
          //   }
          // },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 2,
          // name: '[name].[ext]',
          // publicPath: `${devServerHost}/static`,
        }
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: path.join(__dirname, 'public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      eslint: {
        files: './src/**/*',
        // options: {
        //   fix: true
        // }
      },
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(defaultConfig, require('./development'));
} else if (process.env.NODE_ENV === 'beta') {
  module.exports = merge(defaultConfig, require('./beta'));
} else if (process.env.NODE_ENV === 'production') {
  module.exports = merge(defaultConfig, require('./production'));
} else {
  module.exports = defaultConfig;
}
