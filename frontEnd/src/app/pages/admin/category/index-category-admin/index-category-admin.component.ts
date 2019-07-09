import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-category-admin',
  templateUrl: './index-category-admin.component.html',
  styleUrls: ['./index-category-admin.component.css']
})
export class IndexCategoryAdminComponent implements OnInit {

  navView: string = 'listCategory';
  category: any;
  
  constructor() { }

  ngOnInit() {
  }
  eventClickNav(e){
    this.navView = e;
  }
  eventCategory(e){
    this.category = e;
  }
}
