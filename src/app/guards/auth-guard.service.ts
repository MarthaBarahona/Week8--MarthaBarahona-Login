import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private router: Router, private state: LocalStorageService) { }

  canActivate() {
    if (this.state.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}