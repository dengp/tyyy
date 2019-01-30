const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');
const rimraf = require('rimraf');

const Zip = require('../scripts/zip');
const webpackConfig = require('../scripts/webpack.config')();

rimraf.sync(path.resolve(__dirname, `../dist`));
const rootDir = path.resolve(__dirname, '..');
const compiler = webpack(webpackConfig);

compiler.run(async function(err, stats) {
  if (err) {
    console.log(chalk.red('[打包错误]'));
    console.error(err);
    return;
  }
  console.log(stats.toString({
    modules: false,
    children: false,
    chunks: false,
    colors: true
  }));
  const zip = new Zip({
    distPath: 'dist'
  });
  await zip.run();

  console.log(chalk.green('[打包完成]'), chalk.bold('动起你的小手把dist文件上传上线吧！'));
});
