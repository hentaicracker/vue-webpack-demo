var path = require('path')

module.exports = {

  entry: './src/main',

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css!autoprefixer'},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
      {test: /\.(html|tpl)$/, loader: 'html-loader'},
    ]
  },

  vue: {
    loaders: {
      css: 'style!css!autoprefixer!less'
    }
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      components: path.join(__dirname, './src/components')
    }
  },

  devtool: '#source-map'
}
