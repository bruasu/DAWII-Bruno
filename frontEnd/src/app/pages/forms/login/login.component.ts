import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: string;
  password: string;
  reCapcha: string;
  sha256: any;
  checkCapchaAlert:boolean = true;
  valuesEmpltyAlert: boolean = true;
  UserIncorrectAlert: boolean = true;

  constructor(
    private Slogin: LoginService,
    private router: Router
    ) { 
      if(sessionStorage.getItem('id_user')){
        if(sessionStorage.getItem('typeUser') == 'user'){
          this.router.navigate(['/']);
        }
        else if(sessionStorage.getItem('typeUser') == 'admin'){
          this.router.navigate(['/admin']);
        }

      }
      this.sha256 = require('sha256');
    }
    
    ngOnInit() {
  }

  onSubmitLogin(){
  
    if(this.reCapcha){
      this.checkCapchaAlert = true;
      if(this.login && this.password){

        this.Slogin.login(this.login, this.sha256(this.password)).subscribe((response) => {
          //console.log(response);
          
          if(response.authentication){
            sessionStorage.setItem('id_user', response.id_user);
            sessionStorage.setItem('name', response.name);
            sessionStorage.setItem('login', response.login);
            sessionStorage.setItem('email', response.email);
            sessionStorage.setItem('typeUser', response.typeUser);
            
            if(response.typeUser == 'user'){
              this.router.navigate(['/']);
            }else if(response.typeUser == 'admin'){         
              this.router.navigate(['/admin']);
            }
          }
          
        }, (err) => {
          if(err.status == 400){
            if(!err.error.authentication){
              this.valuesEmpltyAlert = true;
              this.UserIncorrectAlert = false;
            }
          }
        });
      }else{
        this.valuesEmpltyAlert = false;
      }
    }else{
      this.checkCapchaAlert = false;
    }
  }
  registerUser(){
    this.router.navigate(['/register']);
  }
  resolvedreCaptcha(e){
    if(e){
      this.reCapcha = e;
    }
  }

}
