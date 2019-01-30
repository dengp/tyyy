'use strict';
const isDev = process.env.NODE_ENV === 'development';
const basicsConfig = require('./basics.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesConfig = require('../pages.config');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = function() {
  const webpackConfig = basicsConfig({}, isDev);
  if (isDev) {
    // webpackConfig.devtool = 'source-map';
    webpackConfig.devtool = 'cheap-source-map';
  }
  let entryMap = {};
  // 入口文件
  pagesConfig.pages.forEach((metaData) => {
    if (metaData && metaData.entry) {
      const entry = metaData.entry.substring(0, metaData.entry.length - 5);
      webpackConfig.plugins.push(new HtmlWebpackPlugin({
        inject: false,
        minify: {
          collapseWhitespace: !isDev,
        },
        filename: metaData.entry,
        kuwoBridgeVersion: '1.0.0',
        env: process.env.NODE_ENV,
        title: metaData.title,
        description: metaData.desc,
        template: path.join(__dirname, 'entry.ejs'),
        css: !isDev ? `${entry}-[chunkhash].css` : `${entry}.css`,
        entry
      }));
      entryMap[entry] = metaData.src;
    }
  });
  webpackConfig.entry = entryMap;
  webpackConfig.resolve.alias.assets = path.join(rootDir, 'src', 'assets');
  return webpackConfig;
};
