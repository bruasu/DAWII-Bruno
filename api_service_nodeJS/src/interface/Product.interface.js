class Product{
    constructor(){
        this.id_product;
        this.id_category;
        this.name;
        this.sale_price;
        this.purchase_price;
        this.offer_price;
        this.description;
        this.quantity;
        this.image;
        this.status;

        this.category_name;
        this.QueryQuantity; 
    }
    setProductDatas(data){
        if(data.id_product){
            this.id_product = data.id_product;            
        }
        if(data.id_category){
            this.id_category = data.id_category;            
        }
        if(data.name){
            this.name = data.name;            
        }
        if(data.sale_price){
            this.sale_price = data.sale_price;            
        }
        if(data.purchase_price){
            this.purchase_price = data.purchase_price;            
        }
        if(data.offer_price){
            this.offer_price = data.offer_price;            
        }
        if(data.description){
            this.description = data.description;            
        }
        if(data.quantity){
            this.quantity = data.quantity;            
        }
        if(data.image){
            this.image = data.image;            
        }
        if(data.status){
            this.status = data.status;            
        }
        if(data.category_name){
            this.category_name = data.category_name;            
        }
        if(data.QueryQuantity){
            this.QueryQuantity = data.QueryQuantity;
        }
    }
}

module.exports = Product;
