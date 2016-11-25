var config = require('./webpack.base.config.js'),
  webpack = require('webpack'),
  path = require('path'),
  version = require('./package.json').version,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  StatsPlugin = require('stats-webpack-plugin'),
  devPort = process.env.PORT = process.env.PORT || 8000;

config.devtool = 'source-map';

config.plugins.push(
  new CleanWebpackPlugin(['public'], { "verbose": true}),

  new StatsPlugin(path.join('./build', 'stats.json'), {chunkModules: true, exclude: [/node_modules/]}),

  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings:false },
    test: /\.js/i,
  }),

  new webpack.DefinePlugin({
    "process.env": { NODE_ENV: JSON.stringify("production") },
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
    __version__: version
  }),

  new webpack.NoErrorsPlugin()
);

//create a single stylesheet for index.html
(function(options) {
  config.module.loaders.map(function(load) {
    if (load.loader.indexOf('style!') === 0) {
      load.loader = ExtractTextPlugin.extract("style", load.loader.replace('style!',''));
    }
  });

  config.plugins.push(new ExtractTextPlugin("[name]."+version+".css"));
})()

console.log("RUNNING PROD CONFIG");
module.exports = config;
