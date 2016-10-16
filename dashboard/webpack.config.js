var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // Entry
            {from: 'index.html'},
            // Assets
            {from: 'app/images', to: 'images'},
            {from: 'app/stylesheets', to: 'stylesheets'}
        ])
    ]
};

module.exports = config;
