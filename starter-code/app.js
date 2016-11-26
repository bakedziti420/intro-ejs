var express = require('express');
var ejs = require('ejs');
var app = express();

var data = {
	title: "Class Supplies",
	supplies: [
		"Marker",
		"Whiteboard",
		"Laptop",
		"Pen",
		"Notebook"
	]
};

var html = "<h1>"+data.title+"</h1>";
html += "<ul>";
for(var i=0; i<data.supplies.length; i++) {
    html += "<li><a href='supplies/"+data.supplies[i]+"'>";
    html += data.supplies[i]+"</a></li>";
}
html += "</ul>";

app.get('/', function(req,res) {
	res.send(html);
});

app.listen(3000);