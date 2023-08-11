module.exports = {
    devServer: {
      proxy: {
        '^/login': {
          target: 'http://localhost:3000/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }