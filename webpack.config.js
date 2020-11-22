const { resolve } = require('path');

module.exports = {
    mode: 'production',
    entry: [
        './index.jsx'
    ],
    output: {
        path: resolve('./dist'),
        filename: 'react-validation-collection.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env']
                    }
                }
            }
        ]
    }
};