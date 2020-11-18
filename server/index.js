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
const mongooseConfig = require('./lib/mongoose-config')
const mongoose = require('mongoose')

const config = require('./lib/config')

let wordsData = [];

app.use(bodyParser())
app.use(async (ctx, next) => {
  console.log('ctx body', ctx.request.body)
  const url = ctx.request.url
  if (url === '/api/create' && ctx.request.method === 'POST') {
    ctx.body = 'CREATING post';
  } else if (url === '/api/posts') {
    ctx.body = wordsData;
  } else {
    ctx.body = 'Hello Koa'
  }
});

mongooseConfig()

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db once connected')
});

const wordSchema = new mongoose.Schema({
  word: String,
  translate: String
});

const Word = mongoose.model('Word', wordSchema);

const words = db.get('words');

console.log('words', words);

// const water = new Word({ word: 'water', translate: 'вода' });
// water.save((err, second) => {
//   if (err) return console.error(err);
//     console.log('second arg', second)
// })


Word.find({}, function(err, data){
  console.log(">>>> " + data, typeof data);
  wordsData = data
  console.log('wordsData', typeof wordsData);
});

app.listen(config.port);