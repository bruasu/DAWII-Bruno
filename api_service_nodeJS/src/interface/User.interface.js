class User{
    constructor(){
        this.id_user;
        this.name;
        this.login;
        this.password;
        this.repassword;
        this.email;
        this.type_user;
        
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
            this.password = data.password;
        }
        if(data.repassword){
            this.repassword = data.repassword;
        }
        if(data.email){
            this.email = data.email;
        }
        if(data.type_user){
            this.type_user = data.type_user;
        }
    }
}

module.exports = User;