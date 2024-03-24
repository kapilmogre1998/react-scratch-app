const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// we can't use ECMAScript here
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundler.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: "development",

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
    },

    module: {
        rules: [
            // <-- combination of asset/resource + asset/inline -->
            {
                test: /\.(webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.(css|scss)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]
}