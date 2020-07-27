const main = require('./main/')
const bodyParser = require('koa-bodyparser')
const proxy = require('koa2-proxy-middleware')

const proxyOptions = {
  target: 'http://127.0.0.1:9999', //后端服务器地址
  changeOrigin: true //处理跨域
};
const exampleProxy = proxy('/api/home', proxyOptions); //api前缀的请求都走代理
module.exports = (app) => {
  app.use(exampleProxy); //注册

  app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
  }))
  app.use(main())
}