import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-admin-users',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() navUsersValueClick:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eventClick(value: string){
    this.navUsersValueClick.emit(value);
  }

}
