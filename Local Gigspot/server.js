var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;
app.engine('.html', require('ejs').__express);

var bodyParser = require('body-parser');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



var exphbs = require("express");



require('./app/routes/band-api-routes')(app); 
require('./app/routes/venue-api-routes')(app);
require('./app/routes/htmlRoutes')(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

