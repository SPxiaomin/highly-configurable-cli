const Joi = require('joi');

const scheme = Joi.object({
  publicPath: Joi.string().allow(''),
});

exports.validate = (object, callback) => {
  scheme.validate(object, (error) => {
    if (error) {
      callback(error.message);
      process.exit(1);
    }
  });
}