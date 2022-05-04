import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url = environment.socketUrl;
  constructor() { }

  connect() {
    console.log('Connecting to '+ this.url)
    socketIo.io(this.url);
  }

}
