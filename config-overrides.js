const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
    // do stuff with the webpack config...
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
)