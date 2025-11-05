module.exports = function (api) {
  api.cache(true);
  const nativeWindBabel = require('nativewind/babel');
  return {
    presets: [require.resolve('babel-preset-expo')],
    plugins: [
      ...nativeWindBabel().plugins,
    ],
  };
};
