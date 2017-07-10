var path = require('path'),
  webpack = require('webpack'),
  Merge = require('webpack-merge'),
  base = require('./webpack.base.config.js'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  config = require('./config.json')


module.exports = function (buildFolder) {
  return Merge(base, {
    output: {
      path: path.resolve(__dirname, '../' + buildFolder)
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new CleanWebpackPlugin([buildFolder + '/*.*'],
        {
          exclude: ['images', '*.mp4', '*.ttf', '*.woff', '*.woff2', '*.eot'],
          root: path.resolve(__dirname, '../')
        }),
      new UglifyJSPlugin()
    ]
  })
}