var path = require("path");

module.exports = function(app) {

    // this route gets us to the main landing page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/landing-page.html"))
    });

    // this route leads to bands html page
    app.get("/band", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/band.html"))
    });

    // more routes need to be added here...
}