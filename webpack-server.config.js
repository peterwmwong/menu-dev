var webpack = require('webpack');
var config  = require('./webpack.config.js');

config.entry.app.push('webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = { hot: true, inline: true, host: '0.0.0.0', port:8081 };
config.devtool   = 'source-map';

module.exports = config;
