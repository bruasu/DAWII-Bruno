import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
