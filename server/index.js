require('dotenv').config()

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const cors = require('@koa/cors');
const koaOptions = {
  origin: false,
  credentials: true
};
app.use(cors(koaOptions))
const routes = require('./controllers/routes')
const db = require('./controllers/db')
const mongooseConfig = require('./lib/mongoose-config')
const config = require('./lib/config')


app.use(bodyParser())
mongooseConfig()
db()
app.use(routes());


// const water = new Word({ word: 'water', translate: 'вода' });
// water.save((err, second) => {
//   if (err) return console.error(err);
//     console.log('second arg', second)
// })

app.listen(config.port);