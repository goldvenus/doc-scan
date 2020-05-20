module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@screens': './app/screens',
            '@images': './app/theme/image',
            '@icons': './app/theme/icons',
            '@theme': './app/theme',
            '@redux': './app/redux',
            '@components': './app/components'
          }
        }
      ]
    ]
  };
};