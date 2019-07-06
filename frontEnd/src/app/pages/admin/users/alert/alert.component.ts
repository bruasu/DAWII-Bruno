import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-delete-User',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() userName:any;
  @Output() responseDeliteUser:EventEmitter<any> =new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log(this.userName);
  }
  yesDelete(){
    this.responseDeliteUser.emit('YES');
  }
  notDelete(){
    this.responseDeliteUser.emit('NO');    
  }

}
