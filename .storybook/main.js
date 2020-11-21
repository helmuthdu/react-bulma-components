module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-events',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/preset-scss'
  ]
};
