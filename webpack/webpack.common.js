/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

const GAME_NAME = 'TEMPLATE'

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.ts')],
  output: {
    path: path.resolve(__dirname, '../build'),
    // publicPath: '../build',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.jsx?$/,
        include: path.join(__dirname, '../src'),
        loader: 'ts-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          filename: '[name].bundle.js',
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      gameName: GAME_NAME,
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/audio', to: 'public/audio' },
        { from: 'public/font', to: 'font' },
        { from: 'public/img', to: 'public/img' },
        { from: 'public/favicon.ico', to: 'public' },
      ],
    }),
  ],
}
