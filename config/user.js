/**
 * Created by Administrator on 2015/10/14.
 */
var mysql = require('mysql');
var con=require('./db.js');
var TEST_DATABASE = 'miyakee';
function Table(tableName){
    this.tableName=tableName;
    //this.way=way;
    //this.data=data;
    this.client=mysql.createConnection(con);
    this.client.connect();
    this.client.query("use " + TEST_DATABASE);

}
Table.prototype.delete=function (id,callback){
    this.client.query("DELETE FROM "+this.tableName+" where id = "+id ,function(err,results,fileds){
        if(err){
            callback(err,results);
        }else{
            callback(null,results)
        }

    });
    //this.client.end();
};
Table.prototype.select=function(username,password,callback){
    //var TEST_TABLE = 'users';

    this.client.query(
        "SELECT count(*) as count FROM " + this.tableName +" WHERE username= "+username+" AND  password = "+password,
        function(err, results, fields) {
            if (err) {
                callback(err,results)
            }
            else{
                callback(null,results)
            }
        }
    );
    this.client.end();
    //return "1";


};
Table.prototype.find=function(obj,callback){
    var that=this;
  this.client.query(
      "SHOW FIELDS FROM "+ this.tableName,
       function(err,results){
           if (err) {
               callback(err,results)
           }
           else{
               var sql="";
               var now="";
               //var pp="a,";
               results.forEach(function (item) {
                   var m;
                   m=item.Field;
                   var q;
                   q=obj[m];
                   if(q!=undefined) {
                       now += q + ',';
                   }else{
                       now+=null+ ',';
                   }
                   sql += item.Field + ',';

               });
               //now   =   now.replace(/\n/g,"");

               sql=sql.substring(0,sql.length-1);
               now=now.substring(0,now.length-1);
               var all="INSERT INTO "+that.tableName+" ( "+sql+" ) VALUES ("+now+")";

               callback(err,all);
           }
        }
  );


};

Table.prototype.add=function(message,callback){
    this.client.query(message,function(err2,results2){
        if(err2){
            callback(err2,results2);
        }else{
            callback(null,results2);
        }
    });
};
Table.prototype.all=function(callback){
    this.client.query(
        "SELECT * FROM "+ this.tableName,
        function(err,results){
            if (err) {
                callback(err,results)
            }
            else{
                callback(null,results)
            }
        }
    );
    //this.client.end();

};
Table.prototype.want=function(id,callback){
    this.client.query(
        "SELECT * FROM "+this.tableName+" where id = "+id+" limit 1;",
        function(err,results){
            if (err) {
                callback(err,results)
            }
            else{
                callback(null,results)
            }
        }
    );
    //this.client.end();

};
exports.Interface=function(name){
   var  DB=new Table(name);
    return DB;
};
//function test(s){
//    console.log(s);
//}
//var bb=new Table();
//console.log(bb.select(1231,1223));