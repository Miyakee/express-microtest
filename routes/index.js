var express = require('express');
var router = express.Router();
var User=require('../config/user.js').Interface('users');
var Article=require('../config/user.js').Interface('articles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '<h>Express</h>' });
});

router.get('/article', function(req, res, next) {
  Article.all(function(err,results){
    if(err){
      res.send("1");
    }else{
      res.render('article', { all: results });
      //res.render('login_in',{all:results});
    }
  });
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

});


router.get('/addArticle',function(req, res, next){
  res.send("1");
User.add(function(err,res){
  if(err){
    res.send('3');
  }else{
    res.send('200');
  }
});
});

module.exports = router;
