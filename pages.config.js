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
    },
    {
      entry: 'about.html',
      src: './src/pages/about/index.js',
      title: '关于我们',
      desc: '关于我们'
    },
    {
      entry: 'contact.html',
      src: './src/pages/contact/index.js',
      title: '联系我们',
      desc: '联系我们'
    },
    {
      entry: 'join.html',
      src: './src/pages/join/index.js',
      title: '加入我们',
      desc: '加入我们'
    },
    {
      entry: 'protocol.html',
      src: './src/pages/protocol/index.js',
      title: '用户协议',
      desc: '用户协议'
    }
  ]
};
