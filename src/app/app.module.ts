import { HeaderComponent } from './components/header/header.component';
import { LoginnComponent } from './log-in/components/login/login.component';
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
import { HomePageComponent } from './components/home-page/home-page.component';
import { DisplarErrorsComponent } from './components/displar-errors/displar-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomePageComponent,
    DisplarErrorsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LogInModule,
    RouterModule.forRoot([
      {path: '', component: LoginnComponent },
      {path: 'homePage', component: HomePageComponent, canActivate: [AuthGuardService] },
      {path: 'showErrors', component: DisplarErrorsComponent }
    ])
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
