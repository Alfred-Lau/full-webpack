const path = require('path')

const resolve = dir => {
    return path.resolve(__dirname, dir)
}

module.exports = {
    entry: {
        index: './app.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },

}