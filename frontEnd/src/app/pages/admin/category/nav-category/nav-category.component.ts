import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.css']
})
export class NavCategoryComponent implements OnInit {

  @Output() EventClickNav:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clickEvent(event){
    this.EventClickNav.emit(event);
  }
}
