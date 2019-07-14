import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProdutService } from 'src/app/service/produt.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  @Output() viewEventClick:EventEmitter<any> = new EventEmitter();

  name: string;
  category: string;
  sale_price: string;
  purchase_price: string;
  offer_price: string;
  description: string;
  quantity: string;
  status: string;
  image: any;

  categories: object;

  constructor(
    private Scategory: CategoryService,
    private Sproduct: ProdutService
  ) { 

  }

  ngOnInit() {
    this.Scategory.selectCategories().subscribe((response) => {
      if(response){
        this.categories = response;
      }
    }, (err) => {
      console.log(err);
    });
  }

  eventAddProduct(){
    let formData = new FormData();

    formData.append('image', this.image, this.image.name);
    formData.append('name', this.name);
    formData.append('id_category', this.category);
    formData.append('sale_price', this.sale_price);
    formData.append('purchase_price', this.purchase_price);
    formData.append('offer_price', this.offer_price);
    formData.append('description', this.description);
    formData.append('quantity', this.quantity);
    formData.append('status', this.status);
    

    this.Sproduct.insertProduct(formData).subscribe((response)=>{
      if(response){
        this.viewEventClick.emit('listProducts');
      }
    },(err)=>{
      console.log(err);
    });
  }
  onFileChange(e){
    this.image = e.target.files[0];
  }

}
