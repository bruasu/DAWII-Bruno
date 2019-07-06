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
                        res.status(400).json({
                            err: "Duplicate entry",
                            msj: err.sqlMessage
                        });
                    }else{
                        res.status(400).json(err.sqlMessage);
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
                    res.status(400).json({
                        err: err.sqlMessage
                    });
                }
            });

        }else{
            res.status(400).json({
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
            res.status(400).json({
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
            res.status(400).json({
                err: "missing data"
            });
        }
    }
    cCheckLoginUser(data, res){
        this.setUserdatas(data);

        if(this.login){
            this.selectLoginUserCheck((err, rows, fields) => {
                if(!err){
                    if(rows[0]){
                        res.status(200).json({
                            msj: true
                        });
                    }else{
                        res.status(400).json({
                            msj: false
                        });
                    }
                }else{
                    res.status(400).json({
                        err: "missing data"
                    });
                }
            });
        }
    }
    cCheckEmailUser(data, res){
        this.setUserdatas(data);

        if(this.email){
            this.selectEmailUserCheck((err, rows, fields) => {
                if(!err){
                    if(rows[0]){
                        res.status(200).json({
                            msj: true
                        });
                    }else{
                        res.status(400).json({
                            msj: false
                        });
                    }

                }else{
                    res.status(400).json({
                        err: "missing data"
                    });
                }
            });
        }

    }
    cSelectUser(data, res){
        this.setUserdatas(data);

        if(this.login){
            this.selectLoginUserCheck((err, rows, fields)=>{
                if(rows[0].type_user == 'admin' || rows[0].type_user == 'gerent'){
                    if(this.countSelect == null || this.countSelect == 0 || this.countSelect < 0){
                        this.countSelect = 10;
                    }
                    if(this.countSelect > 0){
                        this.selectUserListCount((err, rows, fields) => {
                            if("err"){
                                res.json(rows);
                            }else{
                                res.json({'msj': err});
                            }
                        });
                    }
                }
            });
        }
    }
    cSearchUserNameEmailLogin(data, res){
        this.setUserdatas(data);
        if(this.searchNameEmailLogin){
            this.selectUserNameEmailLogin((err, rows, fields) => {
                if(!err){
                    res.json(rows);
                }else{
                    res.json({
                        msj: err
                    });
                }
            });
        }
    }
    cDeleteUser(data, res){
        this.setUserdatas(data);
        if(this.id_user){
            this.deleteUser((err, rows, fields) => {
                if(!err){
                    if(rows){
                        res.json({
                            "msj": true
                        });
                    }
                }else{
                    res.json({
                        msj: err
                    })
                }
            });
        }
    }
}

module.exports = User;