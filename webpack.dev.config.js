var config = require('./webpack.base.config.js'),
  webpack = require('webpack'),
  path = require('path'),
  version = require('./package.json').version,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  devPort = process.env.PORT = process.env.PORT || 8000;

//update entry for HMR
config.entry = [
  'webpack-dev-server/client?http://localhost:'+devPort, 'webpack/hot/only-dev-server'
].concat(config.entry);

// config.module.loaders.unshift({
  // test: /\.(js|jsx)$/, loader: 'react-hot-loader/webpack', include: path.join(__dirname, 'src')
// });

config.output.publicPath = 'http://localhost:'+devPort+'/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

config.devServer = {
  contentBase: 'public/',
  proxy: {'*': {target: 'http://localhost:8080'}},
  https: false,
  historyApiFallback: true,
  // hot: true,
  inline: true,
  stats: {
    cached: false,
    exclude: [/node_modules/]
  }
};

config.output.pathinfo = true;

console.log("RUNNING DEV CONFIG");
module.exports = config;
