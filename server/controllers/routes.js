const mongoose = require('mongoose')

const routes = () => {
  const db = mongoose.connection
  const wordSchema = new mongoose.Schema({
    word: String,
    translate: String,
    createdDate: {
      type: Date,
      default: Date.now
    }
  });
  
  const Word = mongoose.model('Word', wordSchema);
  
  const words = db.get('words');
  
  console.log('words', words);

  const addWordToDb = (data) => {
    const newWord = new Word(data);
    return new Promise((resolve, reject) => {
      newWord.save(async (err, second) => {
        if (err) {
          console.error(err);
          reject('Error');
        } else {
          resolve('CREATING post');
        }
      })
    })
  }

  const alotWrodsPipeline = (wordsAlot) => {
    const wordsArr = wordsAlot.split(/\d/)
      .map(item => {
        const indexx = item.indexOf('↵')
        return item.slice(0, indexx)
      })
      .map(item => item.trim())
      .map(item => item.slice(2))

    return wordsArr.map(item => {
      const firstIndex = item.indexOf('-')
      return {
          word: item.slice(0, firstIndex).trim(),
          translate: item.slice(firstIndex + 1).trim(),
        }
    })
    .filter(item => !!item.word)
  }

  return async (ctx, next) => {
    const url = ctx.request.url
    console.log('url', url);
    if (url === '/api/create/alot' && ctx.request.method === 'POST') {
      const arrs = alotWrodsPipeline(ctx.request.body.words)
      const posts = await arrs.forEach(item => addWordToDb(item));
      // const post = await addWordToDb(ctx.request.body)
      ctx.body = posts
      ctx.status = 200
    } else if (url === '/api/secret') {
      if (ctx.session.isAuth) {
        ctx.body = 'Можете войти'
        ctx.status = 200
      } else {
        ctx.body = 'Убирайтесь'
        ctx.status = 400
      }
    } else if (url === '/api/login') {
      if (ctx.request.body.password === '123') {
        ctx.session.isAuth = true
        ctx.status = 200
      } 
    } else if (url === '/api/create' && ctx.request.method === 'POST') {
      const post = await addWordToDb(ctx.request.body)
      ctx.body = post
      ctx.status = 200
    } else if (url === '/api/posts') {
      const posts = await Word.find().sort({ createdDate: -1 });
      ctx.body = posts;
    } else if (url === '/api/word' && ctx.request.method === 'DELETE') {
      console.log('delete console', ctx.request.body)
      await Word.deleteOne({
        _id: ctx.request.body.id
      }, (err, second) => {
        if (err) {
          console.log('err', err)
        }
        console.log('second', second);
      })
      ctx.body = ctx.request.body;
    } else {
      ctx.body = 'Hello Koa'
    }
  }
}

module.exports = routes