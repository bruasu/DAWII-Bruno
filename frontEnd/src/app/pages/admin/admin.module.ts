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
import { AlertComponent } from './users/alert/alert.component';
import { IndexProductsAdminComponent } from './products/index-products-admin/index-products-admin.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { NavProductsComponent } from './products/nav-products/nav-products.component';
import { IndexCategoryAdminComponent } from './category/index-category-admin/index-category-admin.component';
import { NavCategoryComponent } from './category/nav-category/nav-category.component';
import { InsertCategoryComponent } from './category/insert-category/insert-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';

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
    SearchUserComponent,
    AlertComponent,
    IndexProductsAdminComponent,
    UpdateProductComponent,
    NavProductsComponent,
    IndexCategoryAdminComponent,
    NavCategoryComponent,
    InsertCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
