var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var cardinfo = require("./info.json");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', function (req, res, next) {
	var args = {
		galleries: cardinfo,
		title: "Photography Galleries test",
		navbar: "Add Gallery"
	};
	res.status(200);
	res.render('homepage', args);
})

app.listen(port, function(){
	console.log("Server has started on port: " + port + "\n");
})