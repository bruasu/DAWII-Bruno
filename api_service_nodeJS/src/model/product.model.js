const Product = require('../interface/Product.interface');

class product extends Product{
    constructor(){
        super();
        this.mysqlConnection = require('../data/database');
    }
    insertProduct(fun){
        let query = "INSERT INTO `products` (`id_category`, `name`, `sale_price`, `purchase_price`, `offer_price`, `description`, `image`, `quantity`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        this.mysqlConnection.query(query,[this.id_category, this.name, this.sale_price, this.purchase_price, this.offer_price, this.description, this.image, this.quantity, this.status], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    updateProductStatus(fun){
        let query = "update products set status = ? where id_product = ?";

        this.mysqlConnection.query(query,[this.status, this.id_product], (err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectProductQuantity(fun){
        let query = "select products.*, categories.name as category_name from products inner join categories on categories.id_category = products.id_category limit ?";

        this.mysqlConnection.query(query,[this.QueryQuantity],(err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
    selectProductQuantityName(fun){
        let query = "select products.*, categories.name as category_name from products inner join categories on categories.id_category = products.id_category where categories.name = ?";

        this.mysqlConnection.query(query,[this.searchName],(err, rows, fields) => {
            fun(err, rows, fields);
        });
    }
}

module.exports = product;