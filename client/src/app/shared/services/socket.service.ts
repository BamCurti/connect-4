import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { BoardComponent } from 'src/app/component/board/board.component';
import { GameComponent } from 'src/app/pages/game/game.component';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = environment.socketUrl;
  socket: any = null;
  room: string = '';
  constructor() { }

  //To know to which room to connect to (game)
  setRoom(room: string) {
    this.room = room;
    this.socket.emit('join-room', room);
  }

  //To know when the other user is connected
  addUser(id: any) {
    this.socket.emit('add-user', this.room, id);
  }

  //To connect to the socket
  connect() {
    this.socket = socketIo.io(this.url);
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.url}`);
    });
  }

  //To send movements to the server
  sendMove(column: number, row: number,  board: Array<Array<any>>, color: string) {
    this.socket.emit('new-move', column, row, board, this.room, color);
  }

  //To get all the new moves from the server
  subscribeToChanges(boardComponent: BoardComponent): void {
    this.socket.on('fetch-move', (column: number, board: Array<Array<any>>, color: string) => boardComponent.addMoveToBoard(column, color));
  }

  waitToOpponent(game: GameComponent) {
    this.socket.on('user-added', (id: string) => {
      game.opponent = id;
      console.log(`New opponent: ${id}`);
    })
  }

  subscribeToWin(game: GameComponent) {
    this.socket.on('lose-case', (update: any) => {
      game.winner = update.winner;
      game.game['isActive'] = update.isActive;
      alert('You lose');
    });

  }

  subscribeToEndGame(game: GameComponent) {

  }

  sendWin(id: any) {
    this.socket.emit('win-case', this.room, id);
  }

}
