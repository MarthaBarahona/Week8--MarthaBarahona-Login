import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayErrorsComponent } from './components/display-errors/display-errors.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    DisplayErrorsComponent,
    HeaderComponent,
    HomePageComponent,
    ProductsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DisplayErrorsComponent,
    HeaderComponent,
    HomePageComponent
  ]
})
export class HomeModule { }
