import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//interfaces
import { Game } from './../interfaces/game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

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
