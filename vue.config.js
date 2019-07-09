const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/public_api': {
        target: 'http://192.168.8.10:3000/api/v1/',
        pathRewrite: { '^/public_api' : '' }
      }
    }
  }
}