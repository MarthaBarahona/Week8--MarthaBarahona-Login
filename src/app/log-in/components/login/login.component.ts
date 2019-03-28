import { AuthService } from './../../../services/auth-service.service';
import { UserService } from './../../../services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BehaviorObservableService } from './../../../services/behavior-observable.service';
import { User } from './../../../interfaces/user.interface';
import { Credentials } from './../../../interfaces/credentials.interface';
import { SingInService } from './../../services/sing-in.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: User[] = [];
  form: FormGroup;

  constructor(
    private state: BehaviorObservableService,
    private storage: LocalStorageService,
    private user: UserService,
    private fb: FormBuilder,
    private route: Router,
    private userExist: SingInService,
    private loginServer: AuthService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    console.log(this.state.behavior);
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  signIn(credentials: Credentials) {
    this.loginServer.login(credentials)
      .subscribe(resultServer => {
        console.log(resultServer);
        this.usersList = this.storage.getUsers();
        const response: User = this.userExist.userExist(credentials, this.usersList);
        if (!response) {
          this.route.navigate(['/showErrors']);
        } else {
          this.state.behavior = true;
          this.user.setUser(response);
          this.route.navigate(['/homePage']);
        }
      }, error => {
        this.route.navigate(['/showErrors']);
      });
  }

}
