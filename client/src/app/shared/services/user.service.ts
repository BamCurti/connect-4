import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiUrl}/user`
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return axios.get(this.url);
  }
  getUser(id: string) {
    return this.httpClient.get(`${this.url}/${id}`)
  }

}
