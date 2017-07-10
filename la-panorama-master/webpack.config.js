/* eslint-disable */

var config = require('./config/config.json');

module.exports = function (env) {
  var result = require(`./config/webpack.${env.production !== 'false' ? 'production' : 'development'}.config.js`)
  if(env.lang === 'en')
    return result(config.buildFolder + '/' + config.buildEn)
  else
    return result(config.buildFolder)
}
