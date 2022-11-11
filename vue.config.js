module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cli-demo/' // vue-cli-demo 為 repo 名稱
    : '/'
}
