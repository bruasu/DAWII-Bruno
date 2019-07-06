import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  valueSearch: string;
  usersSearch: object;

  @Output() user:EventEmitter<any>= new EventEmitter();

  constructor(
   private Suser: UserService
  ) { }

  ngOnInit() {
  }
  requestSearch(){
    this.Suser.searchUserNameEmailLogin(this.valueSearch).subscribe((response) =>{

      if(response){
        this.usersSearch = response;
      }
    },(err) => {
      console.log(err);
    });
  }
  editUser(user): void{
    this.user.emit(user);
  }

}
