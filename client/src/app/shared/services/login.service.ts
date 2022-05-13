import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  /*getUsers(){
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/api/login")
      .then((response) => {
        resolve(response);
      })
      .catch(err => reject(err));
    })
  }*/

  constructor() { }

  login(credentials: any): Promise<any> {
    return axios.post("http://localhost:3000/api/login", credentials);
  }
}
