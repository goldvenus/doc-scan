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
            '@images': './assets/image',
            '@icons': './assets/icons',
            '@theme': './app/theme',
            '@redux': './app/redux',
            '@components': './app/components'
          }
        }
      ]
    ]
  };
};