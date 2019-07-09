import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  name: string;
  category: number;
  sale_price: number;
  purchase_price: number;

  categories: object;

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
    this.Scategory.selectCategories().subscribe((response) => {
      if(response){
        this.categories = response;
      }
    }, (err) => {
      console.log(err);
    });
  }

}
