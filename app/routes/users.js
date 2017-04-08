var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    req.flash('success_msg', 'user');
    res.redirect('/users/test');
    //res.send(req.flash('success_msg'));
})

router.get('/test', function(req, res) {
    res.send(res.locals);
})
module.exports = router;