'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const users = [
	{
		username: 'trgwii',
		password: 'abc123'
	},
	{
		username: 'admin',
		password: '123321'
	},
	{
		username: 'rainbowsuss',
		password: 'melkesjokolade12'
	}
];

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', function (request, response) {
	const user = users.find(function (user) {
		return (user.username === request.body.username);
	});
	if (user && (user.password === request.body.password)) {
		response.send('OK');
	} else {
		response.send('FEIL');
	}
});

app.use(express.static('public'));
app.use(express.static('public/images'));

app.listen(process.env.PORT || 80);
