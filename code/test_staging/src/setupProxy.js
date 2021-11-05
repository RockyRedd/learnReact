const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/to5000', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/to5000': '' },
    })
  )
}
