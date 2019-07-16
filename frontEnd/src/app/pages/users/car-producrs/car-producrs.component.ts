import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car-producrs',
  templateUrl: './car-producrs.component.html',
  styleUrls: ['./car-producrs.component.css']
})
export class CarProducrsComponent implements OnInit {

  products: any;
  total;

  @Output() eventDeleteCar:EventEmitter<any> = new EventEmitter();

  constructor() { 
    
  }
  
  ngOnInit() {
    this.calculation();
  }

  calculation(){
    let obj = JSON.parse(sessionStorage.getItem('car'));
    let arrayIdProducts = Object.keys(obj);

    let array = new Array();
    let total = 0;
    
    for(let i = 0; i < arrayIdProducts.length; i++){
      array.push(obj[arrayIdProducts[i]]);
      total += array[i].price * array[i].quantity;
    }
    this.products = array;
    this.total = total;
  }
  eventdelete(e){
    let obj = JSON.parse(sessionStorage.getItem('car'));
    delete obj[e.id_product];
    sessionStorage.setItem('car', JSON.stringify(obj));
    this.calculation();
    this.eventDeleteCar.emit(Object.keys(obj).length);
  }

}
