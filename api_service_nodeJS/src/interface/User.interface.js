class User{
    constructor(){
        this.id_user;
        this.name;
        this.login;
        this.password;
        this.repassword;
        this.email;
        this.type_user;


        this.countSelect;
        this.searchNameEmailLogin;
        this.sha256 = require('sha256');
        
    }
    setUserdatas(data){
        if(data.id_user){
            this.id_user = data.id_user;            
        }
        if(data.name){
            this.name = data.name;
        }
        if(data.login){
            this.login = data.login;
        }
        if(data.password){
            this.password = this.sha256(data.password);
        }
        if(data.repassword){
            this.repassword = this.sha256(data.repassword);
        }
        if(data.email){
            this.email = data.email;
        }
        if(data.type_user){
            this.type_user = data.type_user;
        }
        if(data.countSelect){
            this.countSelect = data.countSelect;
        }
        if(data.searchNameEmailLogin){
            this.searchNameEmailLogin = data.searchNameEmailLogin;
        }
    }
}
module.exports = User;