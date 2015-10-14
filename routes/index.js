var express = require('express');
var router = express.Router();
var Users=require('../config/user.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '<h>Express</h>' });
});
router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  mine=new Users;
  mine.select(username,password);


});
module.exports = router;
