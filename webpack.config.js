/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const resolveApp = relativePath => path.resolve(__dirname, relativePath);

module.exports = () => {
  return {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname),
      filename: 'dist/index.js',
      sourceMapFilename: 'dist/index.js.map',
      umdNamedDefine: true,
      libraryTarget: 'umd',
      library: 'react-bulma-components',
      globalObject: 'this'
    },
    watchOptions: {
      poll: 250,
      ignored: /node_modules/
    },
    optimization: {
      minimize: false,
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
      new ESLintPlugin(),
      new ProgressBarPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'reports/report.html',
        openAnalyzer: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new OptimizeCssAssetsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new MiniCssExtractPlugin({
        filename: 'dist/react-bulma-components.min.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?.*)?$/,
          use: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader?name=images/[name].[ext]'
        },
        {
          test: /\.s?[ca]ss$/,
          include: resolveApp('src'),
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
        }
      ]
    },
    resolve: {
      modules: ['node_modules', resolveApp('src')],
      extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
      'prop-types': 'commonjs prop-types'
    }
  };
};
