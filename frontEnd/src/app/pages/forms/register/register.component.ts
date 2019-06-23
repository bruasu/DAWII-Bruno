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
  @ViewChild('dataInvalid') DdataInvalid;

  statusSearchUserLogin: boolean;
  statusSearchUserEmail: boolean;

  statusAlertUserLogin: number = 0;
  statusAlertUserEmail: number = 0;

  verificationEmail: boolean = false;
  verificationLogin: boolean = false;
  verificationPassword: boolean = false;
  verificationName: boolean = false;


  constructor(
    private Suser: UserService,
    private render: Renderer2
  ) { 
  }
  
  ngOnInit() {
    //console.log(this.Dpassword);
  }

  registerUser(){    

    if(this.verificationEmail && this.verificationLogin && this.verificationName && this.verificationPassword){
      
      let date = {
        name: this.name,
        login: this.login,
        email: this.email,
        password: this.password,
        repassword: this.repassword,
        type_user: this.type_user
      }
      
      this.Suser.registerUser(date).subscribe((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
        this.render.removeClass(this.DdataInvalid.nativeElement, 'd-none');
      });
        
      
    }else{
      this.render.removeClass(this.DdataInvalid.nativeElement, 'd-none');
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
        this.verificationPassword = true;
        this.render.addClass(this.DrepasswordAlert.nativeElement, 'd-none');
        
        this.render.removeClass(this.Dpassword.nativeElement, 'is-invalid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-invalid');
        this.render.addClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.addClass(this.Drepassword.nativeElement, 'is-valid');
        
      }else if(this.password != this.repassword && this.repassword != null){
        this.verificationPassword = false;
        this.render.removeClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-valid');
        this.render.addClass(this.Dpassword.nativeElement, "is-invalid");
        this.render.addClass(this.Drepassword.nativeElement, "is-invalid");
        
        this.render.removeClass(this.DrepasswordAlert.nativeElement, 'd-none');
      }
      if(this.password == '' && this.repassword == ''){
        this.verificationPassword = false;
        this.render.addClass(this.DrepasswordAlert.nativeElement, 'd-none');

        this.render.removeClass(this.Dpassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-valid');
        this.render.removeClass(this.Dpassword.nativeElement, 'is-invalid');
        this.render.removeClass(this.Drepassword.nativeElement, 'is-invalid');
      }

    }, 500);
  }
  checkLoginUserSearch(){
    if(this.login && this.login.length > 0){

      //request server
      if(this.login.length > 5){
        this.statusSearchUserLogin = true;
        this.verificationLogin = false;
        
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
  checkEmailUserSearch(){
    if(this.email && this.email.length > 0){

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
  }
  }
}
