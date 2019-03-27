import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardService implements CanActivate {

  constructor(private router: Router, private state: LocalStorageService) { }

  canActivate() {
    if (!this.state.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/homePage']);
    return false;
  }
}
