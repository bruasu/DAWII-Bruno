import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index-user-admin',
  templateUrl: './index-user-admin.component.html',
  styleUrls: ['./index-user-admin.component.css']
})
export class IndexUserAdminComponent implements OnInit {

  users: any;
  user: any;
  navView: string = 'listUsers';

  constructor(
    private Suser: UserService
  ) { 
    this.updateDataListUser();
  }

  ngOnInit() {
  }

  responseUser(user){
    this.user = user;
    this.navView = 'user';
  }
  navEventClick(e){
    console.log(e);
    this.navView = e;
    if(e == 'listUsers'){
      this.updateDataListUser();
    }
  }
  updateDataListUser(){
    this.Suser.selectUserAllCount(sessionStorage.getItem('login'), 10).subscribe((response)=>{
      this.users = response;
    });
  }

}
