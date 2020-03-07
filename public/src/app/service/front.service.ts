import { Injectable } from '@angular/core';
import {User , UsersGroupFromBack} from '../api';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FrontService {
  autorizate: boolean;
  user: User;
  constructor(private http: HttpClient) { }
  setAuthorizationUser(user: User) {
    this.user = user;
  }
  getAuthorizationUser() {
    return this.user;
  }
  setAutorizate() {
    this.autorizate = true;
  }
  getAutorizate() {
    return this.autorizate;
  }
}
