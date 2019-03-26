import { AuthService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private service: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      email: [],
      password: []
    });
   }

  ngOnInit() {
    // this.service.login()
    //   .subscribe(response => {
    //     console.log(response);
    //   },
    //   (error: Response) => {
    //     if (error.status === 404) {
    //       alert('User dont found');
    //     }
    //   });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  signIn(credentials) {
    console.log(credentials);
    this.service.login(credentials);
  }

}
