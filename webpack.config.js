var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [].concat([
    new webpack.optimize.UglifyJsPlugin()
]);

module.exports = {
    entry: "./src/profile.js",
    output: {
        path: __dirname,
        filename: "profile.min.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            include: __dirname + "/src"
        }]
    },
    plugins: plugins
}