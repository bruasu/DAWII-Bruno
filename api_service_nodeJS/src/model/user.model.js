const User = require('../interface/User.interface');

class user extends User{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertUser(fun){
        let query = 'insert into users (name, login, password, email, type_user) values (?, ?, ?, ?, ?)';

        this.mysqlConnection.query(query, [this.name, this.login, this.password, this.email, this.type_user], (err, rows, fields) => {
            
            fun(err, rows, fields);
        });
       
    }
    updateUser(fun){
        let query = "update users set name = ?, login = ?, email = ? where id_user = ?";
        this.mysqlConnection.query(query, [this.name, this.login, this.email, this.id_user], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updatePasswordUser(fun){
        let query = "update users set password = ? where id_user = ?";
        this.mysqlConnection.query(query, [this.password, this.id_user], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateTypeUser(fun){
        let query = "update users set type_user = ? where id_user = ?";
        this.mysqlConnection.query(query, [this.type_user, this.id_user], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectLoginUserCheck(fun){
        let query = "select * from users where login = ? limit 1";
        this.mysqlConnection.query(query, [this.login], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectEmailUserCheck(fun){
        let query = "select * from users where email = ? limit 1";
        this.mysqlConnection.query(query, [this.email], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectUserListCount(fun){
        let query = "select * from users limit ?";
        this.mysqlConnection.query(query,[this.countSelect], (err, rows, fields) =>{
            fun(err, rows, fields);
        });
    }

}

module.exports = user;