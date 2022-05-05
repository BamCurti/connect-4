const router = require('express').Router();

//Import module routes
const channelRoutes = require('../modules/channel/channel.routes');
const gameRoutes = require('./../modules/game/game.routes');
const messageRoutes = require('./../modules/message/message.routes');
const moveRoutes = require('./../modules/move/move.routes');
const userRoutes = require('./../modules/user/user.routes');
const authRoutes = require('./../auth/auth.routes');

//Set routes
router.use('/channel', channelRoutes);
router.use('/game', gameRoutes);
router.use('/message', messageRoutes);
router.use('/move', moveRoutes);
router.use('/user', userRoutes);
router.use('/', authRoutes);

module.exports = router;