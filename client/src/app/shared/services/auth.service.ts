import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  createUser(user: object){
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/api/user', user)
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err));
    })
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
}
