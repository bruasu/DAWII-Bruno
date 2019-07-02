import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;
  user: object;

  constructor(
    private Suser: UserService
  ) { }

  ngOnInit() {
    this.Suser.selectUserAllCount(sessionStorage.getItem('login'), 10).subscribe((response)=>{
      this.users = response;
    });
  }
  editUser(user){
    this.user=user;
  }

}
