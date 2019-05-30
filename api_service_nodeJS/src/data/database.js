var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petshop'
});

mysqlConnection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');        
    }
});

module.exports = mysqlConnection;