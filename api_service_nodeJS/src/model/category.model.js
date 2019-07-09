const Category = require('../interface/Category.interface');

class category extends Category{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertCategory(fun){
        let query = "INSERT INTO `categories` (`name`) VALUES (?)";

        this.mysqlConnection.query(query,[this.name], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectCategory(fun){
        let query = "select * from categories";

        this.mysqlConnection.query(query, (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateCategory(fun){
        let query = "update categories set name = ? where id_category = ?";

        this.mysqlConnection.query(query, [this.name, this.id_category], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
}

module.exports = category;