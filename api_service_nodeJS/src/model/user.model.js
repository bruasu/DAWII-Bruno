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

}

module.exports = user;