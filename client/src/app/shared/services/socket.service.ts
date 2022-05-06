import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = environment.socketUrl;
  socket: any = null;
  constructor() { }

  connect() {
    this.socket = socketIo.io(this.url);
    this.socket.on('connect', () => {
      console.log(`Connected to ${this.url}`);
    });

    //  this.socket.on('fetch-move', (column: number, board: Array<Array<any>>) => {
    //    console.table(board);
    //  })
  }

  sendMove(column: number,  board: Array<Array<any>>) {
    console.log('Im Sending')
    this.socket.emit('new-move', column, board);
  }

  subscribeToChanges(callback: Function) {
    this.socket.on('fetch-move', (column: number, board: Array<Array<any>>) => {
      console.table(board);
      callback(column);
    });
  }

}
