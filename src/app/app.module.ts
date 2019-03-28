import { LogoutGuardService } from './guards/logout-guard.service';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { DisplayErrorsComponent } from './home/components/display-errors/display-errors.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './log-in/components/login/login.component';
import { LogInModule } from './log-in/log-in.module';
import { AuthGuardService } from './guards/auth-guard.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { UserProfileComponent } from './home/components/user-profile/user-profile.component';
import { ProductsComponent } from './home/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LogInModule,
    HomeModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent,
        children: [
          {path: 'showErrors', component: DisplayErrorsComponent }
        ]
      },
      {path: 'homePage', component: HomePageComponent, canActivate: [AuthGuardService],
        children: [
          {path: '', redirectTo: 'products', pathMatch: 'full' },
          {path: 'products', component: ProductsComponent},
          {path: 'profile', component: UserProfileComponent}
        ]
      },
    ])
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
