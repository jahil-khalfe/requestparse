var port = process.env.PORT || 8080;

var express = require('express'),
  app = express(),
  path = require('path'),
  exphbs = require('express-handlebars');
  
  
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', 'views');

app.get('/', function(req, res) {
  var regExp = /\(([^)]+)\)/;
  var matches = regExp.exec(req.headers['user-agent']);

  
  res.render('index',{
    ip: req.headers['x-forwarded-for'],
    lang: req.headers['accept-language'].split(',')[0],
    softw: matches[1]
  })
  console.log(req.headers['x-forwarded-for']);
});


app.listen(port, function() {
  console.log('Example app listening on port 8080!')
});