import { Component, OnInit } from '@angular/core';
import { ProdutService } from 'src/app/service/produt.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: object;
  product: object;

  quantitySearch: number = 10;

  constructor(
    private Sproduct: ProdutService
  ) { }

  ngOnInit() {
    this.Sproduct.selectProducts(this.quantitySearch).subscribe((response) => {
      this.products = response;
    }, (err) => {
      console.log(err);
    });
  }

}
