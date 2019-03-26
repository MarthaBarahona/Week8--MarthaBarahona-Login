import { LocalStorageService } from './../../services/local-storage.service';
import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private service: AuthService, private storage: LocalStorageService, private route: Router) {}

  ngOnInit() {
    this.usersList = this.storage.getUsers();
    console.log(this.usersList);

    this.formRegister = this.fb.group({
      firstname: [],
      lastname: [],
      username: [],
      email: [],
      password: [],
      image: []
    });
  }

  get fisrtName() {
    return this.formRegister.get('firstname');
  }

  get lastName() {
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

  register(credentials: User) {
    this.service.register(credentials);
    this.usersList.push(credentials);
    this.storage.setNewUser(this.usersList);
    console.log(this.usersList);

    this.route.navigate(['/homePage']);
  }
}
