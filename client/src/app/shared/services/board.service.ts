import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  goUp(board: Array<Array<any>>, c: number, r: number, color: string): boolean {
    let sum = 1;
    for( let i = r - 1; i >= 0; i-- ) {
        if(board[i][c] === color) {
            sum++;
            if(sum >= 4) return true;
        }
        else return false;
    }
    return false;
}

goRight(board: Array<Array<any>>, c: number, r: number, color: string): boolean {
    let sum = 1;
    for( let i = c + 1; i < 7; i++ ) {
        if(board[r][i] === color ) {
            sum++;
            if(sum >= 4) return true;
        }
        else return false;
    }
    return false;
}

goFortyFive(board: Array<Array<any>>, c: number, r: number, color: string): boolean {
    let sum = 1;
    for( let i = 1; c + i < 7 && r - i >= 0; i++ ) {
        if( board[r - i][c + i] === color ) {
            sum++;
            if(sum >= 4) return true;
        }
        else return false;
    }
    return false;
};

//Function to call every move
hasWon(board: Array<Array<any>>, color: string) {
    let won;
    for( let r = 5; r >= 0; r--) {
        for( let c = 0; c < 7; c++ ) {
            if(board[r][c] === color) {
                console.log(`r: ${r} c: ${c}`);
                won =   this.goUp(board, c, r, color) ||
                        this.goRight(board, c, r, color) ||
                        this.goFortyFive(board, c, r, color);

                if(won) return true;
            }
        }
    }

    return false;
}


}
