const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';



module.exports = (env) => {
  const isProduction = env === 'production';

  return {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test:  /\.s?css$/,
      use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
    }]
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    CSSExtract
  ]
}
};
