import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  createUser(user: object){
    const url = `${environment.apiUrl}/user`
    return axios.post(url, user);
  }

  save(credentials:any) {
    localStorage.setItem('token', credentials.token);
    localStorage.setItem('id', credentials.id);
    this.loginStatus.next(true);
  }

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  delete() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

}
