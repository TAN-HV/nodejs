const newsRouter = require('./news')
function route(app) {
    app.get('/home', (req, res) => {
        res.render('home')
      })
      
      app.use('/news', newsRouter)
      app.get('/search', (req, res) => {
        res.render('search')
      })
      
      app.post('/search', (req, res) => {
        res.send('search-post')
      })
}

module.exports = route;