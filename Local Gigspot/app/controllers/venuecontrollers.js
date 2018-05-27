var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var venue = require("../models/venue.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  venue.all(function(data) {
    var hbsObject = {
      venue: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/routes/venue-api-routes.js", function(req, res) {
  venue.create([
    "venue_name", "name"
  ], [
    req.body.venue_name, req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/routes/venue-api-routes.js/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  venue.update({
    name: req.body.name
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/routes/venue-routes.js/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  venue.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
