var express = require('express');
var router = express.Router();
var User=require('../config/user.js').Interface('users');
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
  var mine=User.select(username,password,function(err,results){
    if(err){
      res.send("3");
    }else{
      //res.send(results);
      if(results[0].count>0){
        res.send("welcome");
      }else{
        res.send("your password is worng");

      }

    }
  });
  //console.log(mine);
  //res.send(mine);//send·µ»ØµÄ×Ö·û´®£»


});
module.exports = router;
