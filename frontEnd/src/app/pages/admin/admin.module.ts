import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { HeaderComponent } from 'src/app/components/structuresAdmin/header/header.component';
import { NavigationComponent } from 'src/app/components/structuresAdmin/navigation/navigation.component';
import { FooterComponent } from 'src/app/components/structuresAdmin/footer/footer.component';

@NgModule({
  declarations: [
    IndexAdminComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
