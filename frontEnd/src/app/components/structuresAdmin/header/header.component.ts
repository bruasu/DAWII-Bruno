import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() requestValueNav: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }
  
  exitSession(){
    sessionStorage.removeItem('id_user');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('typeUser');
    this.router.navigate(['/login']);
  }
  clickEvent(event: string){
    this.requestValueNav.emit(event);
  }
  routerClient(){
    this.router.navigate(['/']);
  }

}
