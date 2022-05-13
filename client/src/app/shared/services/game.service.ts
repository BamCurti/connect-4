import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import axios from 'axios';

//interfaces
import { Game } from './../interfaces/game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getGame(id: string) {
    const url = `${this.url}/game/${id}`;
    return axios.get(url);
  }

  getGameObservable(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/game/${id}`)
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
    return this.httpClient.get(url);
  }

}
