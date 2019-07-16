import { Component, OnInit } from '@angular/core';
import { ProdutService } from 'src/app/service/produt.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  views = "products";

  products: object;
  eventProduct:string = "allProducts";

  quantityCar: any;

  constructor(
    private Sproduct: ProdutService
  ) { }

  ngOnInit() {
    if(this.eventProduct == "allProducts"){
      this.getProducts({name: "allProducts"});
    }
  }
  getProducts(e){
    if(e.name == "allProducts"){
      this.Sproduct.selectProducts(100).subscribe((response) => {
        if(response){
          this.products = response;
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
  eventQuantityCar(e){
    this.quantityCar = e;
  }
  eventView(e){
    this.views = e;
  }

}
