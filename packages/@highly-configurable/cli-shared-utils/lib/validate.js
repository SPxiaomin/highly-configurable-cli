const Joi = require('joi');

const scheme = Joi.object({
  publicPath: Joi.string().allow(''),
  chainWebpack: Joi.func().arity(1),
});

exports.validate = (object, callback) => {
  const { error } = scheme.validate(object);
  if (error) {
    callback(error.message);
    process.exit(1);
  }
};
