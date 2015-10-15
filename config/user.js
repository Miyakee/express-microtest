/**
 * Created by Administrator on 2015/10/14.
 */
var mysql = require('mysql');
var con=require('./db.js');
var TEST_DATABASE = 'microtest3';
function Table(tableName){
    this.tableName=tableName;
    //this.way=way;
    //this.data=data;
    this.client=mysql.createConnection(con);
    this.client.connect();
    this.client.query("use " + TEST_DATABASE);

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
Table.prototype.add=function(obj,callback){
  this.client.query(
      "SELECT count(*) as count FROM " + this.tableName +" WHERE username= "+username+" AND  password = "+password,
       function(err,results){

}
  );

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