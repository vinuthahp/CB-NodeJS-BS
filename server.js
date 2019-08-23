var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
{
  "name": "simple-website-2016",
  "version": "1.0.0",
  "description": "A simple website in node js",
  "private": "true",
  "main": "server.js",
  "scripts": {
    "build-css": "stylus source/stylesheets/index.styl -o static/css",
    "watch-css": "stylus source/stylesheets/index.styl -o static/css -w",
    "clean": "rm -rf static/css && mkdir -p static/css",
    "build": "npm run clean && npm run build-css",
    "watch": "npm run clean && npm run watch-css & nodemon server -e js,jade",
    "start": "node server"
  },
  "author": "Ben Gourley",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4",
    "jade": "^1.11.0",
    "morgan": "^1.7.0",
    "nodemon": "^1.9.1",
    "stylus": "^0.53.0"
  }
}
