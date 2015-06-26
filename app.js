var express = require('express'),
			  sentiment = require('sentiment');


var app = express();

app.get('/favicon.ico', (req, res) => res.send('ok') );
app.get('/:word', (req, res) => {
	var score = sentiment(req.params.word).score;
	if (score > 0) {
		res.status(200).send('You are right!');
	} else if (score < 0) {
		res.status(400).send('What the fuck? no. thats wrong');
	}
	res.status(200).send('I am not sure...');
});

app.listen(4000);