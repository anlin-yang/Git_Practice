const http = require('http');
const https = require('https');
const url = require('url');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const httpProxy = require('http-proxy');


const server = {};

const publicPath = webpackOptions.output.publicPath || '/';

sever.fallbackToIndexIf = () => false;

// 根据请求判断是否返回页面
server.fallbackToIndexIfReq = req => {
  return req.method === 'GET' && (req.path === publicPath || server.fallbackToIndexIf(req.url));
}

server.localApp = express();

server.localApp.get('/', function (req, res) {
  res.send('Hello World')
})
  
server.localAt = function (port, urlMap) {
  console.info('http://localhost:' + port + ' (本地数据版)');
  server.localApp.listen(port);
};


// 创建devServer
function devServer(webpackOptions) {

  const publicPath = webpackOptions.output.publicPath || '/';

  return server;
}

module.exports = devServer;
