const path = require('path')

const PATH = {
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    mode: 'development',
    entry : {
        main: './src/js/main.js'
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
    },

    devServer:{
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port:8080,
    }
}