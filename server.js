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
		navbarLink: "#"
	};
	res.status(200);
	res.render('homepage', args);
})

app.get('/gallery/:page', function(req, res, next){

	var page = req.params.page;
	var singleCard = cardinfo[page-1];

	console.log(singleCard.gallery);

	if(page > cardinfo.length || page < 0 || page == "-0"){
		next();
	}
	else{
		var args = {
			galleries: singleCard, //change to actual images in gallery
			title: singleCard["gallery"],
			navbar: "By " + singleCard.author,
			navbarLink: "#"
		};
		res.status(200);
		res.render('gallerypage', args);
	}
})

app.use(express.static(path.join(__dirname, '/public/')));

app.listen(port, function(){
	console.log("Server has started on port: " + port + "\n");
})