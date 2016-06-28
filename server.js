var express = require('express')
var cors = require('cors');
var app = express()
var methodOverride = require('method-override');

app.use(methodOverride())

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods',  'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if('OPTIONS' == req.method) {
    res.send(200)
  } else {
    next()
  }
}

//app.use(cors())
app.get('/', function(req, res, next) {
  res.render('index.ejs', {})
})
.use(express.static(__dirname + '/dist'))
.use(allowCrossDomain)



var port = process.env.PORT || 3000
app.listen(port)

console.log('the server is now running on port 3000')
