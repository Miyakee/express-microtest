/**
 * Created by Administrator on 2015/10/14.
 */
var mysql = require('mysql');
var TEST_DATABASE = 'microtest3';
var TEST_TABLE = 'user';
var con=require('./db.js');

client=mysql.createConnection(con);
client.connect();
client.query("use " + TEST_DATABASE);
client.query(
    'SELECT * FROM '+TEST_TABLE,
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        if(results)
        {
            for(var i = 0; i < results.length; i++)
            {
                console.log("%d\t%s\t%s", results[i].id, results[i].username, results[i].password);
            }
        }
        client.end();
    }
);