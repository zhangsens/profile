var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/profile.js",
    output: {
        path: __dirname + "/dist",
        filename: "profile.min.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            include: __dirname + "/src"
        }]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()]
}