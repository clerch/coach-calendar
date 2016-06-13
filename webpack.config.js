var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './main.js',

  output:
  {
    path: './',
    filename: 'index.js',
  },

  devServer:
  {
    inline: true,
    port: 3000
  },

  module:
  {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:
      {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css',
    {
      allChunks: true
    })
  ]
}

module.exports = config;
