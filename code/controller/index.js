const route = require('../static/systemRoutes')

module.exports = {
  index: async(ctx, next) => {
    ctx.response.body = `<h2>index page</h2>`
  },
  home: async(ctx,next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    let {id,name} = ctx.params
    ctx.response.body = `<h1>HOME page ${id}/${name}</h1>`
  },
  systemRoutes: async(ctx,next) => {
    ctx.response.body = route
  }
}