import { User } from './../../interfaces/user.interface';
import { Credentials } from './../../interfaces/credentials.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  constructor() { }

  userExist(credentials: Credentials, usersList: User[]) {
    const userExist = usersList.find((user: User) => {
      return user.username === credentials.username && user.password === credentials.password;
    });
    return userExist;
  }
}
