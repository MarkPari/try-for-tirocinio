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
  isLogged$ = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  login = (username: string, password: string) => this.http.post<{token: string}>(`${localServer}/auth/login`, {username, password});

  setMyToken = (token: string) => {
    localStorage.setItem("token", token)
    this.isLogged$.next(true);
  } //localstorage già regalato da angular
  getToken = () => localStorage.getItem('token');
  removeToken = () => {
    localStorage.removeItem('token');
    this.isLogged$.next(false);
  };
}
