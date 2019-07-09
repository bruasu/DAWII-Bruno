import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-list-category-admin',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: object;
  category: any;

  @Output() eventEditCategory:EventEmitter<any> = new EventEmitter();
  @Output() eventSubmitCategory:EventEmitter<any> = new EventEmitter();

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
    this.listCategory();
  }
  listCategory(){
    this.Scategory.selectCategories().subscribe((response) => {
      this.categories = response;
    }, (err) => {
      console.log(err);
    });
  }
  editCategory(category){
    this.category = category;
    this.eventEditCategory.emit('editCategory');
    this.eventSubmitCategory.emit(category);
  }
  deleteCategory(category){
    this.category = category;
    this.eventEditCategory.emit('deleteCategory');
    this.eventSubmitCategory.emit(category);
  }

}
