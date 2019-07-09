const { Router } = require('express');
const router = Router();
const Category = require('../controller/Category.controller');

router.post('/', (req, res) => {
   let data = req.body;
   let category = new Category();

   if(data.name){
       category.cInserCategory(data, res);
   }
});

router.get('/', (req, res) => {
    let category = new Category();
    category.cSelectCategory(res);
});

router.put('/', (req, res) => {
    let id_category = req.body.id_category;
    let name = req.body.name;

    data = {
        id_category: id_category,
        name: name
    }

    let category = new Category();
    category.cUpdateCategory(data, res);
});

router.delete('/:id_category', (req, res) => {
    let id_category = req.params.id_category;
    data ={
        id_category: id_category
    }

    let category = new Category();
    category.cDeleteCategory(data, res);
});

module.exports = router; 