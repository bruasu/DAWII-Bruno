import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/structures/header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from 'src/app/components/structures/footer/footer.component';
import { NavigationComponent } from 'src/app/components/structures/navigation/navigation.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexComponent
  ]
})
export class UsersModule { }
