import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-category-admin',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Input() category;
  @Output() eventClickUpdate:EventEmitter<any> = new EventEmitter();
  name: string;

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
  }
  editCategory(){
    this.Scategory.updateCategory(this.category.id_category, this.name).subscribe((response) => {
      if(response.msj){
        this.eventClickUpdate.emit('listCategory');
      }

    }, (err) => {
      console.log(err);
    });
  }

}
