import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session:boolean;
  checkAdmin:boolean = true;
  @Input() quantityCar: any;
  @Output() eventCar:EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {

   }

  ngOnInit() {
    if(sessionStorage.getItem('id_user')){
      this.session = true;
    }else{
      this.session = false;
    }

    if(sessionStorage.getItem('typeUser') == 'admin'){
      this.checkAdmin = false;
    }
    
    this.eventModificationCar();
  }
  eventModificationCar(){
    let cards = JSON.parse(sessionStorage.getItem('car'));
    this.quantityCar = Object.keys(cards).length;
  }

  routerLogin(){
    this.router.navigate(['/login']);
  }
  exitSession(){
    sessionStorage.removeItem('id_user');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('typeUser');
    this.router.navigate(['/login']);
  }
  adminSession(){
    this.router.navigate(['/admin']);
  }
  eventClick(e){
    this.eventCar.emit(e);
  }

}
