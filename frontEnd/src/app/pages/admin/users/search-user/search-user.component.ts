import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  valueSearch: string;

  constructor() { }

  ngOnInit() {
  }
  requestSearch(){
    console.log(this.valueSearch);
  }

}
