const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: './src/',
    output: {
        path: './dist/',
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015,presets[]=stage-0'],
                exclude: 'node_modules'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', 'jsx'],
        modulesDirectories: ['node_modules']
    },
}