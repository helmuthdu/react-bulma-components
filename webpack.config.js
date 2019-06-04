const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = env => {
  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';

  const options =
    process.env.WEBPACK_ENV === 'INCLUDE_CSS'
      ? {
          output: 'full/index',
          rules: [
            {
              test: /\.s?[ca]ss$/,
              loader: 'style-loader!css-loader!sass-loader'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader!sass-loader'
            }
          ]
        }
      : {
          output: 'dist/index',
          rules: [
            {
              test: /\.s?[ca]ss$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    // If you are having trouble with urls not resolving add this setting.
                    // See https://github.com/webpack-contrib/css-loader#url
                    sourceMap: true
                  }
                },
                {
                  loader: 'resolve-url-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            }
          ]
        };

  return {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname),
      filename: `${options.output}.js`,
      sourceMapFilename: `${options.output}.js.map`,
      umdNamedDefine: true,
      libraryTarget: 'umd',
      library: 'react-bulma-components',
      globalObject: process.env.WEBPACK_ENV === 'INCLUDE_CSS' ? 'window' : 'this'
    },
    watchOptions: {
      poll: 250,
      ignored: /node_modules/
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'react-bulma-components.min',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    plugins: [
      new ProgressBarPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'reports/report.html',
        openAnalyzer: false
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new OptimizeCssAssetsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    ].concat(
      process.env.WEBPACK_ENV === 'INCLUDE_CSS'
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: 'dist/react-bulma-components.min.css'
            })
          ]
    ),
    module: {
      rules: [
        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint')
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          include: resolveApp('src')
        },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: resolveApp('src'),
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo,+ref![path]'
                    }
                  }
                }
              ]
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            cacheCompression: true,
            compact: true
          }
        },
        {
          test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
            cacheDirectory: true,
            cacheCompression: true,

            // If an error happens in a package, it's possible to be
            // because it was compiled. Thus, we don't want the browser
            // debugger to show the original code. Instead, the code
            // being evaluated would be much more helpful.
            sourceMaps: false
          }
        },
        {
          test: /\.json/, // Only .json files
          loader: 'json-loader' // Run both loaders
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        },
        ...options.rules
      ]
    },
    resolve: {
      modules: ['node_modules', resolveApp('src')],
      extensions: ['.js', '.jsx', '.mjs', 'ts', 'tsx', 'json']
    },
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
      'prop-types': 'commonjs prop-types'
    }
  };
};
