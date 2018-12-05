const path = require('path')

const resolve = dir => {
    return path.resolve(__dirname, dir)
}

module.exports = {
    mode: 'development',
    entry: {
        index: './app.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                // browsers: ['> 1%', 'last 2 versions']
                                chrome: '53'
                            }
                        }]
                    ]
                }
            },
            exclude: '/node_modules/'
        }]
    }

}