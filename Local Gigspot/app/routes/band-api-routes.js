var db = require("../models");

module.exports = function(app) {
    app.get("/api/bands", function(req, res) {
        db.Band.findAll({})
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });

    app.get("/api/bands/:id", function(req, res) {
        db.Band.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbBand) {
            res.json(dbBand);
        });
    });

    app.post("/api/bands", function(req, res) {
        db.Band.create(req.body).then(function(dbBand) {
            res.json(dbBand);
        });
    });

    app.delete("/api/bands/:id", function(req, res) {
        db.Band.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBand) {
            res.json(dbBand);
        });
    });
}