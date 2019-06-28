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

  constructor(
    private Slogin: LoginService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  onSubmitLogin(){
  
    this.Slogin.login(this.login, this.password).subscribe((response) => {
      console.log(response);

      if(response.authentication){
        if(response.typeUser == 'user'){
          this.router.navigate(['/']);
        }else if(response.typeUser == 'admin'){         
          this.router.navigate(['/admin']);
        }
      }
      
    }, (err) => {
      if(err.status == 400){
        console.log(err.error);
        
      }
    });
  }
  registerUser(){
    this.router.navigate(['/register']);
  }

}
