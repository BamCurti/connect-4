import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

//interfaces
import { Game } from './../interfaces/game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string = environment.apiUrl;
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

  getGame(id: string) {
    const url = `${this.url}/game/${id}`;
    return axios.get(url);
  }

  getGameObservable(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/game/${id}`, this.httpOptionsClient)
  }

  createGame(red: any): Promise<any> {
      const url = `${this.url}/game`;
      const body = {
        redPlayer: red,
        bluePlayer: undefined,
      }
      return axios.post(url, body)
  }

  getGames(): Observable<any> {
    const url = `${environment.apiUrl}/game`
    return this.httpClient.get(url, this.httpOptionsClient);
  }

}
