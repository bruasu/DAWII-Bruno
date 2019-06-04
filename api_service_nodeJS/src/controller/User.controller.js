const user = require('../model/user.model');

class User extends user{
    constructor(){
        super();
    }
    cInsertUser(data, res){
        this.setUserdatas(data);

        if(this.password == this.repassword){

            this.insertUser((err, rows, fields) => {
                if(!err){
                    if(rows){
                        let response = {
                            insertUser: true,
                            id_user: rows.insertId
                        }
                        res.json(response);                    
                    }
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
    }
    cUpdateUser(data, res){
        this.setUserdatas(data);

        if(this.id_user && this.name && this.login && this.email){
            
            this.updateUser((err, rows, fields) => {
                if(!err){
                    if(rows){
                        res.json({
                            msj: "modification success"
                         });
                    }
                }else{
                    res.json({
                        err: err.sqlMessage
                    });
                }
            });

        }else{
            res.json({
                err: "value in white"
            });
        }
        
    }
    cUpdatePassword(data, res){
        this.setUserdatas(data);

        if(this.password == this.repassword){
            this.updatePasswordUser((err, rows, fields) => {
                if(!err){
                    if(rows){
                    res.json({
                        msj: "modification success"
                        });
                    }
                }
            });
        }else{
            res.json({
                err: 'password not match'
            });
        }
    }
    cUpdateTypeUser(data, res){
        this.setUserdatas(data);

        if(this.type_user){
            this.updateTypeUser((err, rows, fields) => {
                if(!err){
                    if(rows){
                        res.json({
                            msj: "modification success"
                        });
                    }
                }
            });
        }else{
            res.json({
                err: "missing data"
            });
        }
    }

}

module.exports = User;