const router = require('koa-router')()
const controller = require('../controller')


module.exports = (app) => {
  router.get('/', controller.index)

  router.get('/home', controller.home)
  router.get('/home/:id/:name', controller.homeParams)
  router.get('/system/routes', controller.systemRoutes)

  app.use(router.routes()).use(router.allowedMethods())
}