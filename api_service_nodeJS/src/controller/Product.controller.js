const product = require('../model/product.model');

class Product extends product{
    constructor(){
        super();
    }
    cInserProduct(data, res){
        this.setProductDatas(data);

        this.insertProduct((err, rows, fields) => {
            if(!err){
                if(rows){
                    let response = {
                        "insertProduct": true,
                        "id_product": rows.insertId
                      };
                    res.json(response);
                }
            }else{
                res.status(400).json({
                    err: err.sqlMessage
                });
            }
        });
    }
    cUpdateProductStatus(data, res){
        this.setProductDatas(data); 

        this.updateProductStatus((err, rows, fields) => {
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
    }
    cSelectProductQuantity(data, res){
        this.setProductDatas(data);

        this.selectProductQuantity((err, rows, fields) => {
            if(!err){
                if(rows){
                    if(rows.length == 0){
                        res.json({msj: "empty"});
                    }else{
                        res.json(rows);
                    }
                }
            }else{
                res.status(400).json({
                    err: err.sqlMessage
                });
            }
        });
    }
}

module.exports = Product;