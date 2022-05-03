import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  rowSize = 6;
  columnSize = 7;
  clicks = 0;

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
    console.log(this.board)
  }

  onClick(c: number, r: number): void {
    let i  = this.rowSize - 1;
    console.log(this.clicks++)
    //go from bottom to up to see if there is any not used space
    while(i >= 0 ) {
      if(this.board[i][c] === null) {
        this.board[i][c] = "x";
        console.log(this.board);
        console.log()
        return;
      }
      --i;
    }
  }
}
