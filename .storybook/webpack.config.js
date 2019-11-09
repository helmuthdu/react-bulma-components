const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = ({ config }) => {
  return {
    ...config,
    mode: 'development',
    module: {
      ...config.module,
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [['react-app', { flow: false, typescript: true }]]
              }
            },
            require.resolve('react-docgen-typescript-loader')
          ]
        },
        {
          test: /\.s[ca]ss$/,
          loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
        },
        ...config.module.rules
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx'],
      modules: ['node_modules', 'src', ...config.resolve.modules],
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
      }
    },
    plugins: [
      ...config.plugins,
      // graphql sources check process variable
      new DefinePlugin({
        process: JSON.stringify(true)
      })
    ]
  };
};
