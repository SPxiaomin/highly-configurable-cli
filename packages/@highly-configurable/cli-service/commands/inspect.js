module.exports = (options) => {
  return {
    name: 'inspect',
    help: {},
    fn: (args, rawArgs, service) => {
      const { toString } = require('webpack-chain');
      const { highlight } = require('cli-highlight');

      const webpackConfig = service.resolveWebpackConfig();

      console.log(highlight(toString(webpackConfig), { language: 'js' }));
    },
  };
};