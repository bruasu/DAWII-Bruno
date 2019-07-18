const { Router } = require('express');
const router = Router();

const Product = require('../controller/Product.controller');

router.all('/', (req, res, next) => {
    //console.log('method all');
    next();
});

router.get('/:search/:value', (req, res) => {
    let product = new Product();    
    let search = req.params.search;
    
    if(search == 'quantity'){
        let quantity = parseInt(req.params.value);
        let data = {
            QueryQuantity: quantity
        }

        product.cSelectProductQuantity(data, res);
    }
    if(search == 'category'){
        let nameSearch = req.params.value;

        let data ={
            searchName: nameSearch
        }

        product.cSelectProductQuantityName(data, res);
    }
});

router.post('/', (req, res) => {
    let product = new Product();
    let image = req.file;
    let data = req.body;
    data.image = '/img/'+image.filename;
    product.cInserProduct(data, res);
});

router.put('/', (req, res) => {
    let product = new Product();
    let update = req.body.update;

    if(update == "status"){
        product.cUpdateProductStatus(req.body, res);
    }
});

module.exports = router;