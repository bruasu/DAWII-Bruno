import { Component, OnInit, Input, Renderer2, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() user: any;
  name: string;
  login: string;
  email:string;

  @ViewChild("Dname") Dname;
  @ViewChild("Dlogin") Dlogin;
  @ViewChild("Demail") Demail;

  statusSearchUserLogin: boolean;
  statusSearchUserEmail: boolean;

  statusAlertUserLogin: number = 0;
  statusAlertUserEmail: number = 0;

  verificationEmail: boolean = false;
  verificationLogin: boolean = false;
  verificationName: boolean = false;
  

  constructor(
    private Suser: UserService,
    private render: Renderer2
  ) { }

  ngOnInit() {

  }
  checkLoginUser(){
    if(this.login && this.login.length > 0){

      //request server
      if(this.login.length > 5){
        this.statusSearchUserLogin = true;
        this.verificationLogin = false;
        
      if(this.login != this.user.login){
      setTimeout(()=>{
        if(this.statusSearchUserLogin){
          this.statusSearchUserLogin = false;
          console.log('get request Login');
          this.Suser.checkLoginUser(this.login).subscribe((res) => {         
            
              if(res.msj){
                this.verificationLogin = false;
                this.statusAlertUserLogin = 2;
                this.render.removeClass(this.Dlogin.nativeElement, 'is-valid');
                this.render.addClass(this.Dlogin.nativeElement, 'is-invalid');          
              }
            },(err) => {
              if(err.status == 400){
                if(err.error.msj == false){
                  this.verificationLogin = true;
                  this.statusAlertUserLogin = 0;  
                  this.render.removeClass(this.Dlogin.nativeElement, 'is-invalid');
                  this.render.addClass(this.Dlogin.nativeElement, 'is-valid');                
                }            
              }
            });
          }
        }, 1000);
      }else{
        this.render.removeClass(this.Dlogin.nativeElement, 'is-invalid');
        this.render.addClass(this.Dlogin.nativeElement, 'is-valid');        
      }
      }
    //verific requeriments
    if(this.login.length > 5){
      this.statusAlertUserLogin = 0;
    }else{
      if(this.login.length > 0){
        this.statusAlertUserLogin = 1;
      }else{
        this.verificationLogin = false;
        this.statusAlertUserLogin = 0
        this.render.removeClass(this.Dlogin.nativeElement, 'is-valid');
        this.render.removeClass(this.Dlogin.nativeElement, 'is-invalid');
      }
    }
  }    
  }
  checkName(){
    if(this.name && this.name.length > 0){

      this.verificationName = false;
      
      if(this.name.length > 0){
        this.verificationName = true;
        this.render.addClass(this.Dname.nativeElement, 'is-valid');
      }else{
        this.render.removeClass(this.Dname.nativeElement, 'is-valid');
      }
    }
  }

  checkEmailUserSearch(){
    if(this.email && this.email.length > 0){
      if(this.email != this.user.email){
        this.verificationEmail = false;
        //request server
        if(this.email.indexOf('@') != -1 && this.email.indexOf('.') != -1){
          this.statusSearchUserEmail = true;
          this.statusAlertUserEmail = 0;
          
          setTimeout(()=>{
            
            if(this.statusSearchUserEmail){
            this.statusSearchUserEmail = false;
            console.log('get request Email');
            this.Suser.checkEmailUser(this.email).subscribe((res)=>{
              if(res.msj){
                this.verificationEmail = false;
                this.statusAlertUserEmail = 2;
                this.render.removeClass(this.Demail.nativeElement, 'is-valid');
                this.render.addClass(this.Demail.nativeElement, 'is-invalid');
              }
              
            },(err)=>{
              if(err.status == 400){
              if(err.error.msj == false){
                this.verificationEmail = true;
                this.statusAlertUserLogin = 0;  
                this.render.removeClass(this.Demail.nativeElement, 'is-invalid');
                this.render.addClass(this.Demail.nativeElement, 'is-valid');                
              }            
            }
          });
        }
  
      }, 1000);
    
      }else{
        
        if(this.email.length > 6){
          this.statusAlertUserEmail = 1;
        }else{
          this.statusAlertUserEmail = 0;
          this.render.removeClass(this.Demail.nativeElement, 'is-valid');
          this.render.removeClass(this.Demail.nativeElement, 'is-invalid');
        }
        
      }

      }else{
        this.verificationEmail = true;
        this.statusAlertUserLogin = 0;  
        this.render.removeClass(this.Demail.nativeElement, 'is-invalid');
        this.render.addClass(this.Demail.nativeElement, 'is-valid');      
      }
  }
  }

  nameCurrent(){
    this.name = this.user.name;
    this.checkName();
  }
  loginCurrent(){
    this.login = this.user.login;
    this.checkLoginUser();
  }
  emailCurrent(){
    this.email = this.user.email;
    this.checkEmailUserSearch();
  }
}
