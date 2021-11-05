const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/path1', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/path1': '' },
    }),
    proxy('/path2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/path2': '' },
    })
  )
}
