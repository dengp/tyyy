const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('../scripts/webpack.config')();

const rootDir = path.resolve(__dirname, '..');
const compiler = webpack(webpackConfig);
compiler.watch({
  ignored: /node_modules/
}, async (err, stats) => {
  if (err) {
    console.log(chalk.red('[编译错误]'));
    console.error(err);
    return;
  }
  console.log(stats.toString({
    modules: false,
    children: false,
    chunks: false,
    colors: true
  }));
});
