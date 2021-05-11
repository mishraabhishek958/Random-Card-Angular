import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@injectable is used so that angular can use this class in the DI system
//providedIn: 'root' is used so that the service gets available to part of application where it is needed
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://randomuser.me/api';
  constructor(private http: HttpClient) {}

  // it is returning her the observable and whole lot of things going in background
  // and after sometime this obserable stops (automatically) expecting something from the web
  getUser() {
    return this.http.get(this.url);
  }
}
