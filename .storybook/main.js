module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
