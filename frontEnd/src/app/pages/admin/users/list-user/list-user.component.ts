import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  @Input() users:any;
  @Output() user:EventEmitter<any> = new EventEmitter();
  @Output() deleteUserEvent:EventEmitter<any> = new EventEmitter();

  constructor(
  ) { 
    
  }

  ngOnInit() {

  }

  editUser(user): void{
    this.user.emit(user);
  }
  deleteUser(user){
    this.deleteUserEvent.emit(user);
  }


}
