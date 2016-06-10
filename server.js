var express = require('express')

var app = express()

app.use(express.static(__dirname + '/dist'))

app.listen(3000)

console.log('the server is now running on port 3000')
