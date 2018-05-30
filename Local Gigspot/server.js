var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


//Models
var db = require('./app/models');

// Routes
require("./app/routes/band-api-routes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  

var exphbs = require("express");


// Import routes and give the server access to them.
var bandcontrol = require("./app/controllers/bandcontrollers");
var venuecontrol = require('./app/controllers/venuecontrollers');
app.use(bandcontrol, venuecontrol);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

