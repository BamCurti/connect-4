import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiUrl}/user`;
  private httpOptions = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  private httpOptionsClient = {
    headers: new HttpHeaders(this.httpOptions)
  }

  constructor(
    private httpClient: HttpClient
  ) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  getUsers() {
    return axios.get(this.url);
  }
  getUser(id: string) {
    return this.httpClient.get(`${this.url}/${id}`)
  }

}
