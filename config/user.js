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
Table.prototype.delete=function(id,callback){
    this.client.query("DELETE FORM "+this.tableName+"where id ="+id,function(err,results,fileds){
        if(err){
            callback(err,results);
        }else{
            callback(null,results)
        }

    })
}
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
    );            this.client.end();
    //return "1";


};
Table.prototype.add=function(callback){
  this.client.query(
      "SHOW FIELDS FROM users",
       function(err,results){
           if (err) {
               callback(err,results)
           }
           else{
               callback(null,results)
           }
}
  );this.client.end();

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
    );this.client.end();

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