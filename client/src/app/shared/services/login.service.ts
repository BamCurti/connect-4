import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = `${environment.apiUrl}/login`
  constructor() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  login(credentials: any): Promise<any> {
    return axios.post(this.url, credentials);
  }
}
