import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  hasFetch = false;
  gameFound = false;
  game = {};
  id = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    //get id of game
    this.route.params.subscribe(params => this.id = params['id']);

    //get game from backend
    this.gameService.getGame(this.id)
    .then(response => {
      this.gameFound = true;
      this.game = response
      this.socketService.connect();
    })
    .catch(err => this.router.navigate(['/not-found']))
    .finally(() => {
      this.hasFetch = true;
    })
  }
}
