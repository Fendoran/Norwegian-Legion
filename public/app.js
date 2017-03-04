'use strict';
/* global $ */

var form = $('#loginForm');
var submit = $('#loginForm input[type="submit"]');
var result = $('.login');

submit.click(function (event) {
	event.preventDefault();
	var formData = form.serialize();
	$.ajax(form.attr('action'), {
		method: form.attr('method'),
		data: formData,
		success: function (data) {
			result.empty();
			result.text('Logged in as: ' + formData.split('&')[0].split('=')[1]);
			var logout = $('<button>');
			logout.text('Logout');
			result.append(logout);
		}
	});
	return false;
});
