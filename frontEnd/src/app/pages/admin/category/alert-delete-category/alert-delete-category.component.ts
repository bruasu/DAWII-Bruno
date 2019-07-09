import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-alert-delete-category',
  templateUrl: './alert-delete-category.component.html',
  styleUrls: ['./alert-delete-category.component.css']
})
export class AlertDeleteCategoryComponent implements OnInit {


  @Input() category;
  @Output() eventClickUpdate:EventEmitter<any> = new EventEmitter();

  constructor(
    private Scategory: CategoryService
  ) { }

  ngOnInit() {
  }
  deleteCategory(){
    this.Scategory.deleteCategory(this.category.id_category).subscribe((response) => {
      if(response.msj){
        this.eventClickUpdate.emit('listCategory');
      }
    }, (err) => {
      console.log(err);
    });
  }
  yesDelete(){
    this.deleteCategory();
  }
  notDelete(){
    this.eventClickUpdate.emit('listCategory');
  }

}
