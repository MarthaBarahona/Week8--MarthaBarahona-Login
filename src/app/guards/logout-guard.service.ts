import { UserService } from './../services/user.service';
import { BehaviorObservableService } from './../services/behavior-observable.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardService implements CanActivate {

  constructor(private router: Router, private user: UserService) { }

  canActivate() {
    const isLoggin = this.user.getUser();
    if (isLoggin === null) {
      return true;
    }

    this.router.navigate(['/homePage']);
    return false;
  }
}
