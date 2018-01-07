const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const port = process.env.PORT || '8000'

// connect to your app database
mongoose.connect('mongodb://localhost/email_app');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes!
routes(app)

// catch all routes that are not found
app.use(function(req, res) {
  const err = new Error('Not Found')
  err.status = 404
  res.status(404).send(err);
})

app.listen(port, () => console.log(`Serving on port ${port}`))
