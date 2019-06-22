import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/users/index/index.component';
import { LoginComponent } from './pages/forms/login/login.component';
import { RegisterComponent } from './pages/forms/register/register.component';
import { IndexAdminComponent } from './pages/admin/index-admin/index-admin.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin', component: IndexAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
