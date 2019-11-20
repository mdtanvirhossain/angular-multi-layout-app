import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Error404Component } from './error404/error404.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CommonHomeComponent } from './common-home/common-home.component';

const routes: Routes = [

  //common
  {
    path:'',
    component:CommonHomeComponent,
    children: [
      {path:'', component:CommonHomeComponent}
    ]
  },

  //user
  {
    path:'',
    component:UserLayoutComponent,
    children: [
      {path:'user/header', component:UserHeaderComponent},
      {path:'user/footer', component:UserFooterComponent},
      {path:'user/home', component:UserHomeComponent},
    ]
  },

  //admin
  {
    path:'',
    component:AdminLayoutComponent,
    children: [
      {path:'admin/header', component:AdminHeaderComponent},
      {path:'admin/footer', component:AdminFooterComponent},
      {path:'admin/dashboard', component:AdminDashboardComponent},
    ]
  },

  //not found
  {path:'**', component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [UserHeaderComponent, UserFooterComponent, UserHomeComponent, AdminHeaderComponent, AdminFooterComponent, AdminDashboardComponent, Error404Component, UserLayoutComponent, AdminLayoutComponent, CommonHomeComponent]