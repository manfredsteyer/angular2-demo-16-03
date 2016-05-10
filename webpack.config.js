var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        'vendor': ['./app/polyfills', './app/vendor'],
        'app': './app/main'
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css']

    },
    module: {
        loaders: [
            { test: /\.(jpg|jpeg|gif|png)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader:'raw-loader' },
            { test: /\.html$/,  loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/}
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ name: 'vendor' })
    ],
    node: {
        __filename: true
    },
    devServer: {
        inline: true
    }
};
