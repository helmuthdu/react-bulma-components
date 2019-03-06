const path = require('path');
const { DefinePlugin } = require('webpack');


module.exports = ({ config, mode }) => {
  return {
    ...config,
    mode: 'development',
    module: {
      ...config.module,
      rules: [
        {
          test: /\.story\.js?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
        {
          test: /\.s[ca]ss$/,
          loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
        },
        ...config.module.rules,
      ],
    },
    resolve: {
      ...config.resolve,
      modules: ['node_modules', 'src', ...config.resolve.modules],
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      }
      // https://github.com/graphql/graphql-js#using-in-a-browser
    },
    plugins: [
      ...config.plugins,
      // graphql sources check process variable
      new DefinePlugin({
        process: JSON.stringify(true),
      }),
    ],
  };
};
