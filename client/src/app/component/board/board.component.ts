import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from 'src/app/shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() socketService: any = null;
  rowSize = 6;
  columnSize = 7;
  move = 0;

  board: Array<Array<any>>;

  constructor() {
    this.board = []
    for(let r = 0; r < this.rowSize; r++) {
      this.board.push([]);
      for(let c = 0; c < this.columnSize; c++)
        this.board[r].push(null);

    }
  }

  ngOnInit(): void {
    this.socketService.subscribeToChanges(this.addMoveToBoard);
  }

  onClick(c: number): void {
    if(this.addMoveToBoard(c)) this.socketService.sendMove(c, this.board);
    else {
      alert('Select another move vato');
      return;
    }
  }

  addMoveToBoard(c: number): boolean {
    let i  = this.rowSize - 1;

    //go from bottom to up to see if there is any not used space
    while(i >= 0) {
      if(this.board[i][c] === null) {
        this.board[i][c] = "x";
        console.table(this.board);
        return true;
      }
      --i;
    }
    return false;
  }

  onFetchMove(column: number): void {
    this.addMoveToBoard(column);
  }
}
