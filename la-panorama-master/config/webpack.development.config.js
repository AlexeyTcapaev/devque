var path = require('path'),
  webpack = require('webpack'),
  Merge = require('webpack-merge'),
  base = require('./webpack.base.config'),
  config = require('./config.json')


module.exports = function (buildFolder) {
  return Merge(base, {
    output: {
      path: path.resolve(__dirname, '../' + buildFolder)
    },
    devtool: 'eval-source-map',
    devServer: {
      port: 8090,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: '/',
      hot: true
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}