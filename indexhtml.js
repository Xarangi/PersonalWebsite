var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})