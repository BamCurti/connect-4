import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


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
  
  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Promise<any> {
    return axios.post("http://localhost:3000/api/login", credentials);

  }

  googleLogin(idToken: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl+'/auth/google',{
      idToken
    })
  }
}
