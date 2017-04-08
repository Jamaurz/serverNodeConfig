'use strict';

var path = process.cwd();
var passport = require('passport');
var express = require('express');
var app = express.Router();


	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	app.route('/')
		.get(function (req, res) {
			res.redirect('/index.html');
		})
		// .get(isLoggedIn, function (req, res) {
		// 	res.redirect('/index.html');
		// });

	app.route('/login')
		.get(function (req, res) {
			//login
			res.render('login');
		});

	app.get('/info', function(req, res) {
		res.send(req.user)
	});
	
	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			req.flash('success_msg', 'Pa-pa');
			res.redirect('/');
		});

	// app.route('/profile')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.render('profile')
	// 	});

	// app.route('/api/:id')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.json(req.user.github);
	// 	});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/',
            failureRedirect : '/login'
        }));
        
		
module.exports = app;