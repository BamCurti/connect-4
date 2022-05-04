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

    io.on('connection', socket => console.log(`New socket connection from ${socket.handshake.headers.host}`));
}

module.exports = {
    connect: connect
}