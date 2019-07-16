import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.css']
})
export class NavCategoryComponent implements OnInit {

  categories: object;
  @Output() eventCategoryRequest:EventEmitter<any> = new EventEmitter();
  @Output() eventView:EventEmitter<any> = new EventEmitter();

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
    this.Scategory.selectCategories().subscribe((response) => {
      if(response){
        this.categories = response;
      }
    }, (err) => {
      console.log(err);
    });
    this.eventCategory({name: 'allProducts'});
  }
  eventCategory(e){
    this.eventCategoryRequest.emit(e);
    this.eventView.emit('products');
  }

}
