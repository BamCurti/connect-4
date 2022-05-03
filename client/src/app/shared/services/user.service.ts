import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiUrl}/user`
  constructor() { }

  getUsers() {
    return axios.get(this.url);
  }
  getUser(id: string) {
    return axios.get(`${this.url}/${id}`)
  }

}
