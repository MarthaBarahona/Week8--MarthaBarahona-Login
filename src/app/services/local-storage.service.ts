import { BehaviorObservableService } from './behavior-observable.service';
import { UserService } from './user.service';
import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  actualState: boolean;
  usersList = [];
  constructor(
    private state: BehaviorObservableService,
    private user: UserService,
    private route: Router) {}

  getUsers() {
    let users;
    if (localStorage.getItem('listUsers') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('listUsers') || '[]');
    }
    return users;
  }

  setNewUser(newUser: User[]) {
    localStorage.setItem('listUsers', JSON.stringify(newUser));
  }

  logOut() {
    this.state.behavior = false;
    this.user.deleteUser();
    this.route.navigate(['/']);
  }

  isLoggedIn() {
    return this.actualState = this.state.behavior;
  }
}
