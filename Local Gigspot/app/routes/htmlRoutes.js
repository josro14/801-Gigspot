// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
// pages
	app.get('/profile-page-band.html', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/profile-page-band.html'));
	});

	app.get('/profile-page-venue.html', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/profile-page-venue.html'));
    });

    app.get('/login-page.html', function(req,res){
        res.sendFile(path.join(__dirname + '/../public/login-page.html'));
    });

    app.get('/band-listing.html', function(req,res){
        res.sendFile(path.join(__dirname + '/../public/band-listing.html'));
    });
    
    app.get('/venue-listing.html', function(req,res){
        res.sendFile(path.join(__dirname + '/../public/venue-listing.html'));
	});


	// style
	app.get('/4-col-portfolio.css', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/4-col-portfolio.css'));
	});
	app.get('/new.css', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/new.css'));
	});
	app.get('/style.css', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/style.css'));
	});
	app.get('/now-ui-kit.css', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/now-ui-kit.css'));
	});


	// imgs
	app.get('/protoband1.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/protoband1.jpg'));
	});
	app.get('/protoband2.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/protoband2.jpg'));
	});
	app.get('/protoband3.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/protoband3.jpg'));
	});
	app.get('/protoband4.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/protoband4.jpg'));
	});
	app.get('/venuewall.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/venuewall.jpg'));
	});
	app.get('/login.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/login.jpg'));
	});
	app.get('/blurred-image-1.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/blurred-image-1.jpg'));
	});
	app.get('/apple-icon.png', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/apple-icon.png'));
	});
	app.get('/favicon.png', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/favicon.png'));
	});
	app.get('/band.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/band.jpg'));
	});
	app.get('/bg5.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/bg5.jpg'));
	});
	app.get('/bg6.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/bg6.jpg'));
	});
	app.get('/default-avatar.png', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/default-avatar.png'));
	});
	app.get('/josh-pic.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/josh-pic.jpg'));
	});
	app.get('/link_ryan.jpg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/link_ryan.jpg'));
	});
	app.get('/linkedin-ethan.jpeg', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/linkedin-ethan.jpeg'));
	});



	// js files
	app.get('/jquery.3.2.1.min.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/jquery.3.2.1.min.js'));
	});
	app.get('/bootstrap.min.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/bootstrap.min.js'));
	});
	app.get('/popper.min.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/popper.min.js'));
	});
	app.get('/now-ui-kit.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/now-ui-kit.js'));
	});
	app.get('/newJS.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/newJS.js'));
	});
	app.get('/now-ui-kit.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/now-ui-kit.js'));
	});
	app.get('/jquery.sharrre.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/jquery.sharrre.js'));
	});
	app.get('/nouislider.min.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/nouislider.min.js'));
	});
	
	app.get('/bootstrap-swap.js', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/bootstrap-swap.js'));
	});
	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/landing-page.html'));
	});
}