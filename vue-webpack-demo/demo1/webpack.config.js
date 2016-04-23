var webpack = require('webpack');
module.exports = {
  entry: ['./entry.js'],
  output: {
    path: __dirname,
    filename: 'bunble.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
