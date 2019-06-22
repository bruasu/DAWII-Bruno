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

module.exports = router;