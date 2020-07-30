const main = require('./main/')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');

module.exports = app => {
  app.use(main())
	app.use(cors())
  
	app.use(
		bodyParser({
			enableTypes: ['json', 'form', 'text']
		})
	)
}
