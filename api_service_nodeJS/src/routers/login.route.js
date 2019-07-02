const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../data/database');

router.all('/', (req, res, next) => {
    //console.log('method all');
    next();
});

router.post('/', (req, res) =>{
    
    const { login, password } = req.body;

    mysqlConnection.query('select * from users where login = ? and password = ?',[login, password], (err, rows, fields) => {
        if(!err){
            if(rows.length){
                let response = {
                    authentication: true,
                    typeUser: rows[0].type_user,
                    id_user: rows[0].id_user,
                    email: rows[0].email,
                    name: rows[0].name,
                    login: rows[0].login
                }
                res.json(response);
            }else{
                let response = {
                    authentication: false
                }
                res.status(400).json(response);  
            }
        }else{
            let response = {
                err: 'error in the connection DB'
            }
            res.status(400).json(response);
        }
    });   
});

module.exports = router;