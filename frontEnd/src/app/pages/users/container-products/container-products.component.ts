import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css']
})
export class ContainerProductsComponent implements OnInit {


  @Input() products;
  @Output() quantityCar:EventEmitter<any> = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
  }
  eventQuantityCar(e){
    this.quantityCar.emit(e);
  }
}
