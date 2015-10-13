/**
 * Created by Administrator on 2015/10/13.
 */
// conf/db.js
// MySQL数据库联接配置
module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database:'microtest3', // 前面建的user表位于这个数据库中
        port: 3306
    }
};