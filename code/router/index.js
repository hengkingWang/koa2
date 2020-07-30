const router = require('koa-router')()
const controller = require('../controller')


module.exports = (app) => {
  router.get('/', controller.index)

  router.get('/home', controller.home)
  router.get('/home/:id/:name', controller.homeParams)
  router.get('/system/routes', controller.systemRoutes)
  router.get('/api', controller.apiHome)
  router.get('/router/system', controller.systemRouterFilter)
  app.use(router.routes()).use(router.allowedMethods())
}