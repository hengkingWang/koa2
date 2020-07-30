const routes = require('../static/systemRoutes')
const axios = require('axios')

function filterRoutes() {}

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
    ctx.response.body = {code:200, data: route}
  },
  systemRouterFilter: async (ctx, next) => {
    ctx.response.body = {code:200, data: routes}
  },
  apiHome: async(ctx, next) => {
    console.log(ctx);
    const response = await axios.get('http://api.bilibili.com/x/web-show/res/loc?pf=0&id=23',{
      headers: {
        'auth-token': ctx.header['auth-token']
      }
    })
    ctx.body = response.data
  }
}