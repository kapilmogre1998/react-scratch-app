const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// we can't use ECMAScript here
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundler.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: "none",

    //Dev server
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          port: 9000,
    },

    //asset modules and asset management
    module: {
        rules: [
            // <-- combination of asset/resource + asset/inline -->
            {
                test: /\.(webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                    // If the file size is below or equal to 60 KB, it will be embedded as a data URL.
                    // If the file size is above 60 KB, a separate asset file will be created and referenced in the output HTML.
                      maxSize: 60 * 1024
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

    //create html file in build process
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-scratch-app',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}