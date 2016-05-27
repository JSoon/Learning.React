// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

// serve assets with gzip compression
app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'html/router')))

// send all requests to index.html so browserHistory in React Router works
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'html/router', 'index.html'))
})

// app.get('/message/1', function (request, response) {
//     console.log('/message/1')
// })

var PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})