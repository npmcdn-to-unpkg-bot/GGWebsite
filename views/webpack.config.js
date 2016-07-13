module.exports = {
    entry: './js/app.js',
    output: {
        path: './dist',
        filename: './scripts/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=8192'},
            {test: /\.ttf/, loader: 'file?prefix=font/'},
            {test: /\.otf/, loader: 'file?prefix=font/'}
        ]
    }
};
