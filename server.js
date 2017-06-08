var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var cardinfo = require("./info.json");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.get('/', function (req, res, next) {
	var args = {
		galleries: cardinfo,
		title: "Photography Galleries",
		navbar: "Add Gallery",
		navbarLink: "addgallery"
	};
	res.status(200);
	res.render('homepage', args);
})

app.get('/addgallery', function (req, res, next) {
	var args = {
		title: "Photography Galleries - Add Gallery",
		navbar: "Home",
		navbarLink: "/"
	};
	res.status(200);
	res.render('addgallery', args);
})

app.get('/gallery/:page', function(req, res, next){

	var page = req.params.page;
	var singleCard = cardinfo[page];

   if (singleCard) {
      var args = {
		  galleries: singleCard, //change to actual images in gallery
 		  title: singleCard["gallery"] + " - By: " + singleCard.author,
 		  navbar: "Home",
 		  navbarLink: "/"
     };
     res.render('gallerypage', args);
   } else {
     next();
   }
})

app.use(express.static(path.join(__dirname, '/public/')));

app.get('*', function (req, res) {
	var args = {
		title: "Photography Galleries",
		navbar: "Home",
		navbarLink: "/"
	};
	res.status(404);
	res.render('404Page',args);
});

app.listen(port, function(){
	console.log("Server has started on port: " + port + "\n");
})
