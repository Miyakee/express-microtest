/**
 * Created by Administrator on 2015/10/13.
 */
var user = {
    insert:'INSERT INTO user(id, username, password) VALUES(0,?,?)',
    update:'update user set username=, password=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;