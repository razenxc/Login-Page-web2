const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.redirect('/login');
})


app.get('/register', (req, res) => {
    res.sendFile(`${__dirname}/views/register.html`);
})

app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/views/login.html`)
})

app.use(function(req, res, next) {
  res.status(404).sendFile(`${__dirname}/views/error.html`)
});  

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).sendFile(`${__dirname}/views/error.html`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

