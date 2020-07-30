const Koa = require('koa')

const app = new Koa()
const router = require('./router/index')
const middleware = require('./middleware')


middleware(app)
router(app)


app.listen(3000, () => {
	console.log('server is listen in http://localhost:3000')
})
