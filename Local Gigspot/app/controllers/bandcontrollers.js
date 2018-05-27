var express = require("express");

var router = express.Router();


var band = require("../models/band.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  band.all(function(data) {
    var hbsObject = {
      band: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/routes/band-api-routes.js", function(req, res) {
  band.create([
    "band_name", "name"
  ], [
    req.body.band_name, req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/routes/band-api-routes.js/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  band.update({
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

router.delete("/routes/band-api-routes.js/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  band.delete(condition, function(result) {
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
