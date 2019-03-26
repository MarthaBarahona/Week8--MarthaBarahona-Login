import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'});
  url = 'https://reqres.in/';
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(this.url + 'api/login', JSON.stringify(credentials), {headers: this.headers})
    .subscribe(response => {
      console.log(response);
    }, error => {
      alert('something bad happen');
    });
  }

  register(credentials) {
    console.log(credentials);
    return this.http.post(this.url + 'api/register', JSON.stringify(credentials), {headers: this.headers})
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
        alert('The register can not be completed');
      });
  }

  getAllUsers() {
    return this.http.get(this.url + 'api/users');
  }
}
