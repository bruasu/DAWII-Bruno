class Category{
    constructor(){
        this.id_category;
        this.name;
    }
    setCategoryDatas(data){
        if(data.id_category){
            this.id_category = data.id_category;
        }
        if(data.name){
            this.name = data.name;
        }
    }
}

module.exports = Category;