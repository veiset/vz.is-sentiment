var express = require('express'),
    sentiment = require('sentiment');


var good = ['You are totally right!', 'Yes. That is correct.', 'Wait... yes, you are right. Totally right!','Perfect 10/10'];
var bad = ['No way.', 'What the fuck? No. That is wrong.', '100% wrong!', 'Ehhh? Bad request man. Totally incorrect.'];
var whatever = ['I am not sure...', 'Whats up with that?', 'Alright. Probable.','whatever...'];

var randomChoice = arr => arr[Math.floor(arr.length * Math.random())];

var app = express();

app.get('/favicon.ico', (req, res) => res.send('ok') );
app.get('/:word', (req, res) => {
	var score = sentiment(req.params.word).score;
	if (score > 0) {
		return res.status(200).send(randomChoice(good));
	} else if (score < 0) {
		return res.status(400).send(randomChoice(bad));
	}
	return res.status(200).send(randomChoice(whatever));
});

app.listen(4000);