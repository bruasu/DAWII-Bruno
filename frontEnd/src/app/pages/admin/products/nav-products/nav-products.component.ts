import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-products',
  templateUrl: './nav-products.component.html',
  styleUrls: ['./nav-products.component.css']
})
export class NavProductsComponent implements OnInit {

  @Output() viewProduct:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  eventClickProduct(view: string){
    this.viewProduct.emit(view);
  }

}
