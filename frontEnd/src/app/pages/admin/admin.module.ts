import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { HeaderComponent } from 'src/app/components/structuresAdmin/header/header.component';
import { NavigationComponent } from 'src/app/components/structuresAdmin/navigation/navigation.component';
import { FooterComponent } from 'src/app/components/structuresAdmin/footer/footer.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { IndexUserAdminComponent } from './users/index-user-admin/index-user-admin.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './users/nav/nav.component';
import { SearchUserComponent } from './users/search-user/search-user.component';

@NgModule({
  declarations: [
    IndexAdminComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ListUserComponent,
    UpdateUserComponent,
    IndexUserAdminComponent,
    NavComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
