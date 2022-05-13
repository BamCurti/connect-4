const Move = require('../../modules/move/move.model');
const Game = require('../../modules/game/game.model');
const { hasWon } = require('./../../gameLogic')

module.exports = {
    connectSocket: (socket) => {
        console.log(`Connection from user ${socket.id}`);

        //Join to a room (game)
        socket.on('join-room', room => {
            console.log(`User ${socket.id} connected to room ${room}`);
            socket.join(room)
        })

        //To get new movements and resend it
        socket.on('new-move', (column, row, board, room, color) => {
            const model = new Move();
            const gameModel = new Game();
            const move = {
                x: column,
                y: row,
                color: color
            }

            model.create(move).then(doc => {
                //once created, added to the game doc
                const id = doc.insertedId.toString();
                gameModel.addMove(room , id);

                //Check if someone won
                if( hasWon(board, color) ) {
                    socket.to(room).emit('win-case', color);
                    console.log(`Room: ${room} winner: ${color}`);

                    //update of the game object
                    const update = {
                        isActive: false,
                        winner: color
                    }
                    gameModel.update(room, update)
                }

            });
            
            console.table(board);
            socket.to(room).emit('fetch-move', column, board, color);
        });

        //When a new user is added to the game
        socket.on('add-user', (room, id) => {
            const gameModel = new Game();
            update = {
                bluePlayer: id
            }
            gameModel.update(room, update).then((doc) => {
                console.log(`User ${id} added to room ${room}`);
                socket.to(room).emit('user-added', id);
            });
        });

        //If someone win
        socket.on('win-case', (room, id) => {
            const update = {
                isActive: false,
                winner: id
            }

            const gameModel = new Game();
            gameModel.update(room, update)
            .then(result => {
                socket.to(room).emit('lose-case', update);
            })
        })
    }
}