const nativeWindBabel = require('nativewind/babel');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [require.resolve('babel-preset-expo')],
    plugins: [...nativeWindBabel().plugins],
  };
};