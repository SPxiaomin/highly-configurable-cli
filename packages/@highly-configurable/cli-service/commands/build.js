module.exports = (options) => {
  return {
    name: 'build',
    help: {},
    fn: (args, rawArgs, service) => {
      const webpack = require('webpack');

      const webpackConfig = service.resolveWebpackConfig();

      webpack(webpackConfig, (err, stats) => {
        if (err) {
          throw err;
        }

        process.stdout.write(
          `${stats.toString({
              colors: true,
              modules: false,
              children: false,
              chunks: false,
              chunkModules: false,
          })}\n`,
        );

        // test-only signal
        if (process.env.VUE_CLI_TEST) {
          console.log('Build complete.')
        }
      });
    },
  };
};
