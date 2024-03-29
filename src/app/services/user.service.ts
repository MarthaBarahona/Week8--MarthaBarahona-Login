import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { }

  getUser() {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user') || '[]');
    }
    return this.user;
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteUser() {
    this.user = null;
    localStorage.removeItem('user');
  }
}
