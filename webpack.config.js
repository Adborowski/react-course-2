// THIS IS NODE 

// entry -> output
const path = require('path');
// we're getting this to get access to path.join()
console.log(path.join(__dirname, "public"));

// output path MUST BE ABSOLUTE
module.exports = {
    entry: './src/app.js', // relative path
    output: {
        path: path.join(__dirname, "public"), // absolute path
        filename: 'bundle.js',
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"), // pasted from above
        historyApiFallback: true
    }
}