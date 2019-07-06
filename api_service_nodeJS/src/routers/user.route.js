const { Router } = require('express');
const router = Router();

const User = require('../controller/User.controller');

router.all('/', (req, res, next) => {
    //console.log('method all');
    next();
});

router.post('/', (req, res) => {
    let user = new User();
    user.cInsertUser(req.body, res);
});

router.put('/', (req, res) => {
    let update = req.body.update;
    let user = new User();

    if(update == 'user'){
        user.cUpdateUser(req.body, res);
    }else if(update == 'password'){
        user.cUpdatePassword(req.body, res);
    }else if(update == 'typeUser'){
        user.cUpdateTypeUser(req.body, res);
    }

});

router.get('/:typeSearch/:search', (req, res) => {    
    let typeSearch = req.params.typeSearch;
    let user = new User();    
    
    if(typeSearch == 'login'){
        let login = req.params.search
        
        let data = {
            login: login
        }

        user.cCheckLoginUser(data, res);
    }
    else if(typeSearch == 'email'){        
        let email = req.params.search;

        let data = {
            email: email
        }
        user.cCheckEmailUser(data, res);
    }
    else if(typeSearch == 'NameEmailLogin'){
        let search = req.params.search;

        let data = {
            "searchNameEmailLogin": search
        }
        user.cSearchUserNameEmailLogin(data, res);
    }

});
router.get('/:typeSearch/:user/:count', (req, res) => {
    let typeSearch = req.params.typeSearch;
    let userRequest = req.params.user;
    let count = parseInt(req.params.count);
    let user = new User();    
    
    if(typeSearch == 'list'){
        
        let data = {
            login: userRequest,
            countSelect: count
        }

        user.cSelectUser(data, res);
    }
});
router.delete('/:idUser',(req, res) => {
    let idUser = req.params.idUser;
    let user = new User();

    let data ={
        "id_user": idUser
    }

    user.cDeleteUser(data, res);
});

module.exports = router;