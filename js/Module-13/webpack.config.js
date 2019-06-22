const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [{
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')})
  ]
}];
