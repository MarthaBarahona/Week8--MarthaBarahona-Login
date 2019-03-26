import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  usersList = [];
  constructor() {}

  getUsers() {
    let users;
    if (localStorage.getItem('listUsers') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('listUsers') || '[]');
    }
    return users;
  }

  setNewUser(newUser) {
    localStorage.setItem('listUsers', JSON.stringify(newUser));
  }
}
