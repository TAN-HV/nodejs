const http = require('http')
const fs = require('fs')
const sass = require('node-sass');
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('tiny'))
//Template engine
app.engine('hbs', handlebars({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// console.log(__dirname);
app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
  // fs.readFile()
})