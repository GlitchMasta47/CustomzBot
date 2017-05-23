var express = require('express')
var app = express()
var port = process.env.PORT

app.use(app.static('webdocs'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
