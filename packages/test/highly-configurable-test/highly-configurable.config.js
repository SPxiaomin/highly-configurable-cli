module.exports = {
  publicPath: '/app',
  chainWebpack: (webpackConfig) => {
    webpackConfig
      .output
      .publicPath('/bpp');
  },
};
