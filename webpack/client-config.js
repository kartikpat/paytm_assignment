const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

// const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        index: [
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
            './client/index.js',
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('build'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
};