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
            // {
            //     test: /\.(webp|png|jpg)$/,
            //     type: "asset/resource"
            // },
            // {
            //     test: /\.svg/,
            //     type: 'asset/inline'
            // },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
        ]
    }
}