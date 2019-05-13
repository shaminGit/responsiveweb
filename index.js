var express = require("express");
var app = express();

app.use(express.static(__dirname + '/frontend'));    // to server static files to the client
app.set('port',(process.env.PORT || 4000));
app.set('views', __dirname +'/views');
app.set('view engine'  ,'ejs');

app.get('/', function(req, res) {
    res.render('/index.html');
});
var server = app.listen(app.get('port'), function(){              //start the server at port 5000
  console.log('Server listening on port ' + app.get('port'));
