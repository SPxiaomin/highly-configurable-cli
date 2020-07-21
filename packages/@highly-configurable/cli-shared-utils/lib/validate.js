const Joi = require('joi');

const scheme = Joi.object({
  publicPath: Joi.string().allow(''),
  filenameHashing: Joi.boolean(),
});

exports.validate = (object, callback) => {
  const { error } = scheme.validate(object);
  if (error) {
    callback(error.message);
    process.exit(1);
  }
};
