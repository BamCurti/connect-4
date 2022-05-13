//Win cases
const goUp = (board, c, r, color) => {
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
    
const goRight = (board, c, r, color) => {
    let sum = 1;
    for( let i = c + 1; i < 7; i++ ) {
        if(board[r][i] === color ) {
            sum++;
            if(sum >= 4) return true;
        }
        else return false;
    }
    return false;
};
    
const goFortyFive =  (board, c, r, color) => {
    let sum = 1;
    for( let i = 1; c + i < 7 && r - i >= 0; i++ ) {
        if( board[r - i][c + i] === color ) {
            sum++; 
            if(sum >= 4) return true;
        }
    }
};

//Function to call every move
const hasWon = (board, color) => {
    console.table(board);
    let won;
    for( let r = 5; r >= 0; r--) {
        for( let c = 0; c < 7; c++ ) {
            if(board[r][c] === color) {
                console.log(`r: ${r} c: ${c}`);
                won =   goUp(board, c, r, color) ||
                        goRight(board, c, r, color) ||
                        goFortyFive(board, c, r, color);
    
                if(won) return true;
            }
        }
    }
    
    return false;
}

module.exports = {
    goUp,
    goFortyFive,
    goRight,
    hasWon
}