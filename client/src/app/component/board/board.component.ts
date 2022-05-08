import { Component, OnInit, Input, } from '@angular/core';
import { BoardService } from 'src/app/shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() socketService: any = null;
  @Input() game: any;
  color = 'x';
  winner:any = null;

  rowSize = 6;
  columnSize = 7;
  move = 0;

  board: Array<Array<any>>;

  constructor(
    private boardService: BoardService,
  ) {
    this.board = []
    for(let r = 0; r < this.rowSize; r++) {
      this.board.push([]);
      for(let c = 0; c < this.columnSize; c++)
        this.board[r].push(null);
    }
  }

  ngOnInit(): void {
    console.log(this.game);
    this.color = ( this.game['redPlayer'] === localStorage.getItem('id') ) ? 'r' : 'b';
    this.socketService.subscribeToChanges(this, this.color);
    this.socketService.subscribeToWin(this);
  }

  onClick(c: number): void {
    if(!!this.winner) return;

    if( !this.isMyTurn() ) {
      alert(`It isn't your turn`);
      return;
    }

    const r = this.addMoveToBoard(c, this.color);
    if( r < 0 ) {
      alert('Select another move vato');
      return;
    }
    this.socketService.sendMove(c, r, this.board, this.color);
    const hasWon = this.boardService.hasWon(this.board, this.color);
    if(hasWon) {
      this.socketService.sendWin(localStorage.getItem('id'));
      alert(('You won!'))
    }
  }

  addMoveToBoard(c: number, color: string): number {
    let i  = this.rowSize - 1;

    //go from bottom to up to see if there is any not used space
    while( i >= 0 ) {
      if( this.board[i][c] === null ) {
        this.board[i][c] = color;
        console.table(this.board);
        this.move++;
        return i;
      }
      --i;
    }
    return -1;
  }

  onFetchMove(column: number, color: string): void {
    this.addMoveToBoard(column, color);
  }

  isMyTurn() {
    return this.move % 2 == 0 && this.color == 'r' || this.move % 2 == 1 && this.color == 'b';
  }
}
