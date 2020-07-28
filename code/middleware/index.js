const main = require('./main/')
const bodyParser = require('koa-bodyparser')

module.exports = app => {
  app.use(main())

  
	app.use(
		bodyParser({
			enableTypes: ['json', 'form', 'text']
		})
	)
}
