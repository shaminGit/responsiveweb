var express = require("express");
var app = express();
app.use(express.static('frontend'));    // to server static files to the client


var server = app.listen(4000, function(){              //start the server at port 5000
  console.log('Server listening on port ' + server.address().port);
});
