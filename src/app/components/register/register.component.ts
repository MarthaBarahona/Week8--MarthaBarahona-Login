import { AuthService } from './../../services/auth-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.formRegister = fb.group({
      email: [],
      password: []
    });
   }

  ngOnInit() {
  }

  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  register(credentials) {
    this.service.register(credentials);
  }

  getUsers() {
    this.service.getAllUsers()
      .subscribe(response => {
        console.log(response);
      });
  }

}
