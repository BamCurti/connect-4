import { Component, OnInit } from '@angular/core';
import { GameService } from './../../shared/services/game.service';
import { Game } from './../../shared/interfaces/game';

@Component({
  selector: 'app-game-record',
  templateUrl: './game-record.component.html',
  styleUrls: ['./game-record.component.scss']
})
export class GameRecordComponent implements OnInit {

  games: Game[] = [];
  displayedColumns: string[] = ['id', 'winner', 'blue', 'red', 'date', 'goto'];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data => this.games = data);
  }
}
