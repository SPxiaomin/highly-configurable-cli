module.exports = (options) => { // eslint-disable-line no-unused-vars
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