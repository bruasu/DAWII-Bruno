import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-products-admin',
  templateUrl: './index-products-admin.component.html',
  styleUrls: ['./index-products-admin.component.css']
})
export class IndexProductsAdminComponent implements OnInit {

  navView: string = 'listProducts';
  product: any;

  constructor() { }

  ngOnInit() {
  }
  viewProduct(e){
    this.navView = e;
  }

}