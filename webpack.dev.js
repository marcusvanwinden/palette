const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});
