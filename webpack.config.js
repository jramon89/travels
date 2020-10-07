const webpack = require('webpack'),
    path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: 'babel-loader'
            },

            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        publicPath: '/dist',
        compress: true,
        port: 9000,
        open: true
    }

}