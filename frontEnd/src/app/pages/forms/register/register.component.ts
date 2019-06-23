import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  login: string;
  email: string;
  password: string;
  repassword: string;
  type_user: string = "user";
  
  @ViewChild("Dpassword") Dpassword;
  @ViewChild('Drepassword') Drepassword;
  @ViewChild("Dname") Dname;
  @ViewChild("Demail") Demail;
  @ViewChild('Dlogin') Dlogin;
  @ViewChild('DpasswordAlert') DpasswordAlert;
  @ViewChild('DrepasswordAlert') DrepasswordAlert;

  statusSearchUserLogin: boolean;
  statusAlertUserLogin: number = 0;

  constructor(
    private Suser: UserService,
    private render: Renderer2
  ) { 
  }
  
  ngOnInit() {
    //console.log(this.Dpassword);
  }

  registerUser(){
    let date = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
      repassword: this.repassword,
      type_user: this.type_user
    }
    if(this.password == this.repassword){
      this.Suser.registerUser(date);      
    }else{

    }

  }
  checkPassword(){
    setTimeout(() => {
      if(this.password.length > 5){
        this.render.addClass(this.DpasswordAlert.nativeElement, 'd-none');  
      }else{
        this.render.removeClass(this.DpasswordAlert.nativeElement,'d-none');
        if(this.password == ''){
          this.render.addClass(this.DpasswordAlert.nativeElement, 'd-none');  
        }
      }
      
      // check if they are equal       
      if(this.password == this.repassword){    
        this.render.addClass(this.DrepasswordAlert.nativeElement, 'd-none');
        
        this.render.removeClass(this.Dpassword.nativeElement, 'is-invalid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-invalid');
        this.render.addClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.addClass(this.Drepassword.nativeElement, 'is-valid');
        
      }else if(this.password != this.repassword && this.repassword != null){
        this.render.removeClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-valid');
        this.render.addClass(this.Dpassword.nativeElement, "is-invalid");
        this.render.addClass(this.Drepassword.nativeElement, "is-invalid");
        
        this.render.removeClass(this.DrepasswordAlert.nativeElement, 'd-none');
      }
      if(this.password == '' && this.repassword == ''){
        this.render.addClass(this.DrepasswordAlert.nativeElement, 'd-none');

        this.render.removeClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Dpassword.nativeElement, 'is-invalid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-invalid');
      }

    }, 500);
  }
  checkLoginUserSearch(){    
    //request server
    if(this.login.length > 5){
      this.statusSearchUserLogin = true;

      setTimeout(()=>{
        console.log('get');
        if(this.statusSearchUserLogin){
          this.statusSearchUserLogin = false;
          console.log('get request');
          this.Suser.checkLoginUser(this.login).subscribe((res) => {         
            
            if(res.msj){
              this.statusAlertUserLogin = 2;
            this.render.removeClass(this.Dlogin.nativeElement, 'is-valid');
            this.render.addClass(this.Dlogin.nativeElement, 'is-invalid');          
          }
        },(err) => {
          if(err.status == 400){
            if(err.error.msj == false){
              this.statusAlertUserLogin = 0;  
              this.render.removeClass(this.Dlogin.nativeElement, 'is-invalid');
              this.render.addClass(this.Dlogin.nativeElement, 'is-valid');                
            }            
          }
        });
      }
      }, 1000);
    }
    //verific requeriments
    if(this.login.length > 5){
      this.statusAlertUserLogin = 0;
    }else{
      this.statusAlertUserLogin = 1;
      this.render.removeClass(this.Dlogin.nativeElement, 'is-valid');
      this.render.removeClass(this.Dlogin.nativeElement, 'is-invalid');
    }
  }
}
