import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import axios, { Axios } from 'axios';

//interfaces
import { Game } from './../interfaces/game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string = 'http://localhost:3000'

  constructor() { }

  getGame(id: string) {
    return new Promise<any>((resolve, reject) => {
      const url = `${this.url}/api/game/${id}`;
      console.log(url)
      axios.get(url)
      .then(response => resolve(response))
      .catch(err => reject(err));
    });
  }

  createGame(red: string ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = `${this.url}/api/game`;
      const body = {
        redPlayer: red,
        bluePlayer: undefined,
      }
      axios.post(url, body)
      .then(response => resolve(response))
      .catch(err => reject(err))
    })
  }

  getGames(): any {
    return [
      {
        id: 'id',
        winner: 'winner',
        bluePlayer: 'bluePlayer',
        redPlayer: 'redPlayer',
        datetime: Date.now(),
        details: []
      },
      {
        id: 'id',
        winner: 'winner',
        bluePlayer: 'bluePlayer',
        redPlayer: 'redPlayer',
        datetime: Date.now() + 1,
        details: []
      },
    ]
  }


}
