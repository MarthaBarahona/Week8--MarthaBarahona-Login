import { Credentials } from './../../interfaces/credentials.interface';
import { LocalStorageService } from './../../services/local-storage.service';
import { User } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  usersList: User[] = [];
  form: FormGroup;

  constructor(private storage: LocalStorageService, private fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      username: [],
      password: []
    });
   }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  signIn(credentials: Credentials) {
    this.usersList = this.storage.getUsers();
    const userExist = this.usersList.find((user: User) => {
      return user.username === credentials.username && user.password === credentials.password;
    });

    console.log(userExist);
  }

}
