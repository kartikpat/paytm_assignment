const path = require('path');
const nodeExternals = require('webpack-node-externals');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('build'),
        filename: 'serverBundle.js',
    },
    mode: IS_DEV ? 'development' : 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: { extensions: ['.js', '.jsx'] },
};
