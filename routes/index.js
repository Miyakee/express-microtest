var express = require('express');
var router = express.Router();
var User=require('../config/user.js').Interface('users');
var Article=require('../config/user.js').Interface('articles');
var jquery=require('../public/javascripts/jquery.js');

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
router.get('/article/delete/:id',function(req,res,next){
  var id=req.params.id;
  Article.delete(id,function(err,result){
    if(err){
      res.send(err);
    }else{
      res.redirect("/article");
    }
  })
});
router.get('/update',function(req,res,next){
  //var id=req.params.id;
  res.render('update');
});

router.post('/update',function(req,res,next){
  var obj=new Object();
   obj.theme=req.body.theme;
   obj.category_id=req.body.category_id;
  obj.content="'"+req.body.editor01+"'";
  obj.goods=0;
  obj.bads=0;
  obj.click=0;
  //obj.created_at=new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString();
  //obj.updated_at=new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString();
  //obj.id=20;
//var  a="";

var  a=Date.parse(new Date());
obj.created_at=a/1000;
  obj.updated_at=a/1000;
  //var now="";
  //now=
  Article.find(obj,function(err,results){
    if(err){
      res.send(err);
    }else{
      Article.add(results,function(err2,results2){
        if(err2){
          res.send(results)
        }else{
          res.send(results2);
        }
      });
    }

  })
});

router.get('/addArticle',function(req, res, next){
  res.send("1");
User.add(function(err,res){
  if(err){
    res.send(err);
  }else{
    res.send('200');
  }
});
});

module.exports = router;
