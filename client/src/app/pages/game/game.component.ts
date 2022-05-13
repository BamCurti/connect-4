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
  game:any = {};
  id: string = ''; //the id of the game
  opponent: string = '';
  winner: string = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    public socketService: SocketService,
  ) { }

  ngOnInit(): void {
    //get id of game
    const userId = localStorage.getItem('id');
    this.route.params.subscribe(params => this.id = params['id']);

    //get game from backend
    this.gameService.getGameObservable(this.id).subscribe(response => {
      this.hasFetch = true;
      this.game = response;

      //connect to socket
      this.socketService.connect();
      this.socketService.setRoom(this.id);
      this.socketService.subscribeToWin(this);


      //to wait if opponent is connected
      if( this.game['redPlayer'] === userId ) this.socketService.waitToOpponent(this);

      else if ( !this.game['bluePlayer'] || this.game['bluePlayer'] === userId ) {
        this.socketService.addUser(userId);
        this.opponent = this.game['redPlayer'];
      }
      else {
        alert('This room is full!');
        this.router.navigate(['/']);
      }

    }, err => this.router.navigate(['/not-found']));
  }

}
