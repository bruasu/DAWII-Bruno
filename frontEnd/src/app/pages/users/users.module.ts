import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/structures/header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from 'src/app/components/structures/footer/footer.component';
import { NavCategoryComponent } from './nav-category/nav-category.component';
import { ContainerProductsComponent } from './container-products/container-products.component';
import { ContainerProductUniqueComponent } from './container-product-unique/container-product-unique.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    NavCategoryComponent,
    ContainerProductsComponent,
    ContainerProductUniqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IndexComponent
  ]
})
export class UsersModule { 
}
