var path = require("path"),
assign = require('object-assign'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
version = require('./package.json').version,
webpack = require("webpack");

module.exports = {
  entry: ['./src/bootstrap.js'],

  output: {
    publicPath: '/',
    path: path.resolve('public/'),
    filename: "bundle.js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[name].js",
  },

  module: {
    noParse: [/(\-|\.)min.js$/],
    loaders: [
      { test: /\.(js|jsx)$/,
        include: [/src/],
        exclude: [/(node_modules|persistence)/],
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
          cacheDirectory: true
        }},
      { test: /\.json$/, loader: 'json'},
      { test: /\.css$/, exclude: /.(\-|\.)min.css$/, loader: 'style!css!postcss'},
      { test: /\.sass/, loader: 'style!css!sass?sourceMap'},
      { test: /\.(png|jpg|jpeg|svg|gif)$/, exclude:/icons/, loader: 'url?limit=8192&name=assets/images/[name].[ext]'},
      { test: /\.(png|jpg|jpeg|svg|gif)$/, include:/icons/, loader: 'file?name=[name].[ext]'},
      { test: [/index\.html$/, /\.(ico)/], loader: 'file?name=[name].[ext]'}],
    sassLoader: {
      includePaths: path.resolve(__dirname + "./src")
    },
  },


  resolve: {
    extensions: ["", ".js", ".jsx"],
    /* allow for root relative names in require */
    modulesDirectories: ['node_modules', 'src']
  },

  resolveLoader: {
    root: [path.join(__dirname, "node_modules"), './src', 'vendor'],
  },

  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    version: version,
    inject: false,
    template: 'src/assets/index.htm'
  }),
  ],

  target: "web",
  devTool: "source-map",

}
