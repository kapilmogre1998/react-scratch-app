const path = require('path');

// we can't use ECMAScript here
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundler.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(webp|png|jpg)$/,
                type: "asset/resource"
            }
        ]
    }
}