import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
const {localServer} = environment

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myToken: string ="";
  isLogged$ = new BehaviorSubject<boolean>(false);
  myLoggedUsername = new BehaviorSubject<string>("")

  constructor(private http: HttpClient) { }

  // login = (username: string, password: string) => {
  //   this.myLoggedUsername.next(username);
  //   return this.http.post<{token: string, username: string}>(`${localServer}/auth/login`, {username, password})
  // };
  login = (username: string, password: string) => this.http.post<{token: string, username: string}>(`${localServer}/auth/login`, {username, password});

  setMyToken = (token: string) => {
    localStorage.setItem("token", token);
    this.isLogged$.next(true);
  }; //localstorage già regalato da angular
  setUsername = (username: string) => {
    localStorage.setItem("username", username);
  }
  getToken = () => localStorage.getItem('token');
  getUsername = () => localStorage.getItem('username');
  removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isLogged$.next(false);
  };
  

}
