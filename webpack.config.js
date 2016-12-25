var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname +'/dist',
        publicPath: '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader'
                })
            },
            // {
            //     test: /\.jpg$/,
            //     loader: "file-loader?name=[path][name].[ext]"
            // }
        ],
    },
    devtool: "eval",
    plugins: [new ExtractTextPlugin('bundle.css')]
}