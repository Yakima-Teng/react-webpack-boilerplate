var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env.js'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  env: {
    env: require('./dev.env.js'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {}
  }
}
