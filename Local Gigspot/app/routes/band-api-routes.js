// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// ===============================================================================

var bandlistingData = require('../data/bandlisting-data');
var path = require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/band-listing', function(req, res){
		res.json(band-listingData);
	});
}