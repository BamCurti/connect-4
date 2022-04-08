const joi = require('joi');

const players = joi.array();

const channelSchema = joi.object({
    players: players.required()
});

module.exports = {channelSchema}
