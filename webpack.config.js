var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: './bread-takehome/node_modules/webpack.config.js',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
