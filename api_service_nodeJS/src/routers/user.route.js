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

router.get('/:typeSearch/:login', (req, res) => {
    let typeSearch = req.params.typeSearch;
    let login = req.params.login
    let user = new User();
    
    console.log(typeSearch, login);
    let date = {
        login: login
    }

    if(typeSearch == 'login'){
        user.cCheckLoginUser(date, res);
    }
});

module.exports = router;