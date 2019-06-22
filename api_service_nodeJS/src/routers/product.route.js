const { Router } = require('express');
const router = Router();

const Product = require('../controller/Product.controller');

router.all('/', (req, res, next) => {
    //console.log('method all');
    next();
});

router.get('/', (req, res) => {
    let product = new Product();
    let search = req.body.search;

    if(search == 'quantity'){
        product.cSelectProductQuantity(req.body, res);
    }
});

router.post('/', (req, res) => {
    let product = new Product();
    product.cInserProduct(req.body, res);
});

router.put('/', (req, res) => {
    let product = new Product();
    let update = req.body.update;

    if(update == "status"){
        product.cUpdateProductStatus(req.body, res);
    }
});

module.exports = router;