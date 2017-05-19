// var clock = require('node-emoji-clock');

// var time = new Date();

// console.log(time);

// console.log(clock.timeToEmoji(time));

var express = require('express');
var app = express();

var server = app.listen(3000, function() {
	console.log('listening on 3000');
});

app.get('/:name/:num', function(req, res) {
	var name = req.params['name'];
	var num = req.params['num'];

	var text = '';
	for (var i = 0; i < parseInt(num); i++) {
		text += name;
		text += ' ';
	}
	res.send(text);
});

//app.use(express.static('public'));

// app.get('/', function(request, response){
// 	console.log('got request');
// 	response.send('i am text');
// });

// app.get('/page2', function(req, res) {
// 	res.send('i am a sub-page');
// })