module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    host: '127.0.0.1',
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
