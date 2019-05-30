const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../data/database');

router.all('/', (req, res, next) => {
    console.log('method all');
    next();
});

router.post('/', (req, res) => {
    const { name, login, password, repassword, email, type_user} = req.body;
    let query = 'insert into users (name, login, password, email, type_user) values (?, ?, ?, ?, ?)';
        if(password == repassword){
            
            mysqlConnection.query(query, [name, login, password, email, type_user], (err, rows, fields) => {
                if(!err){
                    res.json(rows);
                }else{
                    if(err.code == "ER_DUP_ENTRY"){
                        res.json({
                            err: "Duplicate entry",
                            msj: err.sqlMessage
                        });
                    }else{
                        res.json(err.sqlMessage);
                    }
                }
            });
        }else{
            let response = {
                err: "password not match"
            }
            res.status(400).json(response);
        }
});

module.exports = router;