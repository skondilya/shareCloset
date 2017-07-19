var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: { path: __dirname, filename: 'public/bundle.js' },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /.jsx?$/,
        loader: 'css-loader', 
        options: { url: false} 
      }
    ]
  },
  resolve: {
      extensions: ['', '.js','.jsx', '.ts']
  },
  plugins: [ 
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
};



