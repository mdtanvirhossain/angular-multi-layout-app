import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonHomeComponent } from './common-home/common-home.component';
// import { UserHeaderComponent } from './user-header/user-header.component';
// import { UserFooterComponent } from './user-footer/user-footer.component';
// import { UserHomeComponent } from './user-home/user-home.component';
// import { AdminHeaderComponent } from './admin-header/admin-header.component';
// import { AdminFooterComponent } from './admin-footer/admin-footer.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { Error404Component } from './error404/error404.component';
// import { UserLayoutComponent } from './user-layout/user-layout.component';
// import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    CommonHomeComponent,
    // UserHeaderComponent,
    // UserFooterComponent,
    // UserHomeComponent,
    // AdminHeaderComponent,
    // AdminFooterComponent,
    // AdminDashboardComponent,
    // Error404Component,
    // UserLayoutComponent,
    // AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
