import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { COMMENT_MARKER } from '@angular/core/src/render3/interfaces/i18n';

@Component({
  selector: 'app-container-product-unique',
  templateUrl: './container-product-unique.component.html',
  styleUrls: ['./container-product-unique.component.css']
})
export class ContainerProductUniqueComponent implements OnInit {

  @Input() product;
  quantity:any = 1;
  @Output() quantityCar:EventEmitter<any> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  addCarProduct(product){
    this.addSessionCard(product);
  }
  clickQuantity(){
    
  }
  addSessionCard(product){
    let car = JSON.parse(sessionStorage.getItem('car'));
    
    if(car == null){
      car = {};
    }
    
    if(car != null){
      if(car[product.id_product]){
        if(car[product.id_product].quantity != this.quantity){
          car[product.id_product] = {
            id_product: product.id_product,
            quantity: this.quantity
          };
          sessionStorage.setItem('car', JSON.stringify(car));
        }
      }else{
        car[product.id_product] = {
          id_product: product.id_product,
          quantity: this.quantity
        };
        sessionStorage.setItem('car', JSON.stringify(car));
      }
    }else{
      car[product.id_product] = {
        id_product: product.id_product,
        quantity: this.quantity
      };
      sessionStorage.setItem('car', JSON.stringify(car));
      
    }

    let cards = JSON.parse(sessionStorage.getItem('car'));
    this.quantityCar.emit(Object.keys(cards).length);
  }
  
}
