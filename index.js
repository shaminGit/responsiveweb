var express = require("express");
var app = express();
app.use(express.static('frontend'));    // to server static files to the client

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});
var server = app.listen(process.env.PORT || 4000, function(){              //start the server at port 5000
  console.log('Server listening on port ' + server.address().port);
});
