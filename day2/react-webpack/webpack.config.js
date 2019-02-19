var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "main.js"
  },
  module: {
    rules: [
        { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: 'babel-loader' }
      ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8989,
    hot: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};