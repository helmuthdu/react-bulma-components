module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/typescript',
    '@babel/preset-react'
  ];

  return {
    presets
  };
};
