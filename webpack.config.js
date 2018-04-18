var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};
