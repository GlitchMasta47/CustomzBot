var express = require('express')
var app = express()
var port = process.env.PORT

app.use(express.static('webdocs'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
