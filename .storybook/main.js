const webpackConfig = require('./webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: (config) => {
    return { 
      ...config, 
      resolve: { ...webpackConfig.resolve },
      module: { ...webpackConfig.module },
      plugins: [ ...config.plugins, ...webpackConfig.plugins ]
    };
  },
};
