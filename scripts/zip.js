'use strict';
const path = require('path');
const pkg = require('../package.json');
const chalk = require('chalk');
const archiver = require('archiver');
const fse = require('fs-extra');
const filesize = require('filesize');

const rootDir = path.resolve(__dirname, '..');

class Zip {
  constructor(options) {
    const zipDistPath = path.join(rootDir, 'zip');
    const isZipDistPathExiste = fse.existsSync(zipDistPath);
    if (!isZipDistPathExiste) {
      fse.mkdirpSync(zipDistPath);
    }
    this.zipDistPath = zipDistPath;
    this.distPath = path.join(rootDir, options.distPath);
    this.tempZipDirPath = path.join(rootDir, '.tempzip');
    this.archiveZip = archiver('zip');
  }
  async run() {
    if (!pkg.version) {
      console.log(chalk.red('package.json中version为空！'));
      return;
    }
    const date = new Date();
    const timeString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}_${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
    // this.zipName = `${pkg.version}_${timeString}.zip`;
    this.zipName = 'tyyy.zip';
    const isBuild = await fse.exists(this.distPath);
    if (!isBuild) {
      console.log(chalk.green('[压缩]'), chalk.red('dist目录为空，请先编译！！！'));
      return;
    }
    // 复制临时目录
    await fse.copy(this.distPath, this.tempZipDirPath);
    this.ziping();
  }
  ziping() {
    const output = fse.createWriteStream(path.join(this.zipDistPath, this.zipName));
    output.on('close', async() => {
      fse.remove(this.tempZipDirPath);
      console.log(chalk.green(`${this.zipName}已生成，大小为：`), chalk.bold(filesize(this.archiveZip.pointer())));
    });
    this.archiveZip.pipe(output);
    this.archiveZip.directory(this.tempZipDirPath, this.zipName.replace('.zip', ''));
    this.archiveZip.finalize();
  }
}

module.exports = Zip;
