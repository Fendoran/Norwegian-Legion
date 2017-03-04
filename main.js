'use strict';

const fs = require('fs');
const { sep } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
	console.log(req.body);
	if (req.body.userid) {
		if (req.body.pswrd) {
			fs.readFile('users' + sep + req.body.userid + '.txt', 'utf8', (err, data) => {
				if (err) {
					return next(Error('Invalid username'));
				}
				if (req.body.pswrd !== data.trim()) {
					return next(Error('Wrong password'));
				}
				res.redirect('/index.html');
			});
		} else {
			next(Error('Missing password'));
		}
	} else {
		next(Error('Missing username'));
	}
});
app.post('/register', (req, res, next) => {
	next(Error('Ikke laget enda'));
});

app.use(express.static('public'));

app.listen(3000);
