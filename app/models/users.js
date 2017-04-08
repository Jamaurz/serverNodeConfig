'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	twitter: {
	    id: String,
	    token: String,
	    username: String,
	    displayName: String
	},
   polls: [
   	{
   		options: [],
   		voting: []
   	}
   ]
});

module.exports = mongoose.model('User', User);

function addPoll(id) {
	
}