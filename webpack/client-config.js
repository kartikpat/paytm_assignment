const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV === 'development';

const getPlugins = () => {
    let plugins = [];

    if (IS_DEV)
        plugins = [
            ...plugins,
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin({
                overlay: { sockIntegration: 'whm' },
            }),
        ];

    if (!IS_DEV) plugins = [...plugins];

    return plugins;
};

module.exports = {
    entry: IS_DEV
        ? [
              'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
              './client/index.js',
          ]
        : './client/index.js',
    output: {
        filename: IS_DEV ? '[name].js' : '[name].[contenthash].js',
        path: path.resolve('build'),
        publicPath: '/',
    },
    mode: IS_DEV ? 'development' : 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: getPlugins(),
    resolve: { extensions: ['.js', '.jsx'] },
};
