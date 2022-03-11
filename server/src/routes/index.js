const router = require('express').Router();

//Import module routes
const channelRoutes = require('./../modules/Channel/channel.routes');


//Set routes
router.use('/channel', channelRoutes);

module.exports = router;