/**
 * Created by Administrator on 2015/10/14.
 */
var mysql = require('mysql');
var con=require('./db.js');
var TEST_DATABASE = 'microtest3';
function Table(name,way,data){
    this.name=name;
    this.way=way;
    this.data=data;
}
module.exports=Table;
Table.prototype.select=function select(username,password){
    var TEST_TABLE = 'users';
    client=mysql.createConnection(con);
    client.connect();
    client.query("use " + TEST_DATABASE);
    client.query(
        "SELECT count(*) as count FROM " + TEST_TABLE +" WHERE username= "+username+" AND  password = "+password,
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            if (results) {
              return results[0].count>0;

            }
            client.end();
        }
    );
};
