const path = require('path')

const PATH = {
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    entry : {
        index: './src/js/main.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: PATH.dist
    },

    module:{
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
}