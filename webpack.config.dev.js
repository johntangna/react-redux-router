const path = require('path');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  ...baseWebpackConfig,
  devtool: 'inline-source-map',
  mode: 'development',
  watchOptions: {
    poll: true,
  },
  stats: 'errors-warnings',
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    proxy: [
      {
        context: ['/api'],
        target: 'http://127.0.0.1:8025',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    ],
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'info',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, "./index.html"),
      inject: "body"
    }),
    new CaseSensitivePathsWebpackPlugin(),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, './src'),
      extensions: ['ts', 'tsx', 'js', 'jsx'],
    }),
  ],
};
