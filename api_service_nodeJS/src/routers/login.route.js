const { Router } = require('express');
const router = Router();

router.all('/', (req, res, next) => {
    console.log('method all');
    next();
});

router.get('/', (req, res) => {
    res.json({status: 'verified'});
});

module.exports = router;