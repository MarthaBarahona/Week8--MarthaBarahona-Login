import { LogoutGuardService } from './../guards/logout-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginnComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginnComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'register', component: RegisterComponent, canActivate: [LogoutGuardService] },
    ])
  ],
  exports: [
    LoginnComponent,
    RegisterComponent
  ]
})
export class LogInModule { }
