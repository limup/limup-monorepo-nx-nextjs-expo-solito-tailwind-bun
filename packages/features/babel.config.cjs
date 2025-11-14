const nativeWindBabel = require('nativewind/babel');

module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        modules: false,
        targets: { browsers: ['defaults'] },
      },
    ],
    [
      require.resolve('@babel/preset-react'),
      {
        runtime: 'automatic',
      },
    ],
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [...nativeWindBabel().plugins],
};

