const pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  name: pkg.name,
  pages: [
    {
      entry: 'index.html',
      src: './src/pages/index/index.js',
      title: '童言有艺官网',
      desc: '童言有艺官网'
    }
  ]
};
