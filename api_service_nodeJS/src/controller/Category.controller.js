const category = require('../model/category.model');

class Category extends category{
    constructor(){
        super();
    }
    cInserCategory(data, res){
        this.setCategoryDatas(data);

        if(this.name){
            this.insertCategory((err, rows, fields) => {
                if(!err){
                    if(rows){
                        let response = {
                            insertCategory: true,
                            id_category: rows.insertId
                        }
                        res.json(response);
                    }
                }else{
                    if(err.code == "ER_DUP_ENTRY"){
                        res.status(400).json({
                            err: "Duplicate entry",
                            msj: err.sqlMessage
                        });
                    }else{
                        res.status(400).json(err.sqlMessage);
                    }
                }
            });
        }
    }
    cSelectCategory(res){
        this.selectCategory((err, rows, fields) => {
            if(!err){
                res.json(rows);
            }else{
                res.status(400).json(err.sqlMessage);
            }
        });
    }
    cUpdateCategory(data, res){
        this.setCategoryDatas(data);

        if(this.id_category){
            this.updateCategory((err, rows, fields) => {
                if(!err){
                    if(rows){
                        res.json({
                            msj: true
                        });
                    }
                }else{
                    res.status(400).json({
                        msj: err
                    });
                }
            });
        }
    }
}

module.exports = Category;