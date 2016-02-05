var data = require("../data.json");

exports.addFriend = function(req, res) {
	res.render('add');
	console.log("his");
var newFriend = JSON.parse('{ "name": "' +
	req.query.name+'", "description": "'+
	req.query.description+'", "imageURL": "'+
	'http://lorempixel.com/500/500/people"}');
data["friends"].push(newFriend);
	// Your code goes hereres.render('add',newFriend);

}