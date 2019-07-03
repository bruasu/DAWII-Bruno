import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() requestValueNav: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  clickHome(){
    this.requestValueNav.emit('home');
  }
  clickUsers(){
    this.requestValueNav.emit('users');
  }

}
