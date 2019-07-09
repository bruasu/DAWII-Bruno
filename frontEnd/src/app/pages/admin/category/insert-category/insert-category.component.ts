import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {

  name: string;

  @Output() eventInsertCategory:EventEmitter<any> = new EventEmitter();

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
  }
  addCategory(){
    this.Scategory.insertCategory(this.name).subscribe((response) => {
      if(response.insertCategory){
        this.eventInsertCategory.emit('listCategory');
      }
    }, (err) => {
      console.log(err);
    })
  }

}
