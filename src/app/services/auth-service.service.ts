import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://reqres.in/api/login';
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(this.url, JSON.stringify(credentials))
    .subscribe(response => {
      console.log(response);
    }, error => {
      alert('something bad happen');
    });
  }
}
