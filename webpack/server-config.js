const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('build'),
        filename: 'serverBundle.js',
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
            ]
    }
};