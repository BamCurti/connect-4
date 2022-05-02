import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    //get id of game
    this.route.params.subscribe(params => this.id = params['id']);

    //get game from backend
    this.gameService.getGame(this.id)
    .then(response => {
      this.gameFound = true;
      this.game = response
    })
    .catch(err => this.router.navigate(['/not-found']))
    .finally(() => {
      this.hasFetch = true;
    })
  }
}
