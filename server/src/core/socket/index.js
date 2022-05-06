const moveController = require('../../modules/move/move.controller');
const socketIo = require('socket.io');

const connect = (server) => {
    const url = process.env.SOCKET_URL || 'http://localhost:4200';
    const conf = {
        cors: {
            origin: url,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowHeaders: ['Authorization'],
            credentials: true
        }
    }
    const io = socketIo(server, conf);

    io.on('connect', socket => {
        console.log(`New socket connection from ${socket.id}`);

        socket.on('new-move', (column, board) => {
            console.table(board);
            socket.broadcast.emit('fetch-move', column, board);
        })


    });
}

module.exports = {
    connect: connect
}