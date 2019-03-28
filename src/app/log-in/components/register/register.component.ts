import { LocalStorageService } from './../../../services/local-storage.service';
import { AuthService } from './../../../services/auth-service.service';
import { UserService } from '../../../services/user.service';
import { BehaviorObservableService } from './../../../services/behavior-observable.service';
import { User } from './../../../interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  usersList: User[] = [];
  formRegister: FormGroup;

  constructor(
    private user: UserService,
    private state: BehaviorObservableService,
    private fb: FormBuilder,
    private service: AuthService,
    private storage: LocalStorageService,
    private route: Router) {}

  ngOnInit() {
    this.formRegister = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  get firstname() {
    return this.formRegister.get('firstname');
  }

  get lastname() {
    return this.formRegister.get('lastname');
  }

  get username() {
    return this.formRegister.get('username');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get image() {
    return this.formRegister.get('image');
  }

  register(newUserInfo: User) {
    this.usersList = this.storage.getUsers();
    this.service.register(newUserInfo);
    this.usersList.push(newUserInfo);
    this.storage.setNewUser(this.usersList);
    this.state.behavior = true;
    console.log(this.usersList);
    this.user.setUser(newUserInfo);
    this.route.navigate(['/homePage']);
  }

  usernameExists(username: string) {
    const userExist = this.usersList.find((user: User) => {
      return user.username === username;
    });
    if (userExist) {
      return true;
    }
  }

  emailExists(email: string) {
    const userExist = this.usersList.find((user: User) => {
      return user.email === email;
    });
    if (userExist) {
      return true;
    }
  }
}
