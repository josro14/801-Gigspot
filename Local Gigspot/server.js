var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
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
  