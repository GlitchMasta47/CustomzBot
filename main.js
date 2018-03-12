// Variables //

var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

// Register all files in the /webdocs/ folder for use in the web server //

app.use(express.static('webdocs'))

// Easter eggs //

app.get('/secret', function (req, res) => {
  res.end("Don't even try")
})

// Server setup, grabs the port and starts using it //

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
