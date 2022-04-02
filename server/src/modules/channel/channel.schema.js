const joi = require('joi');

const id = joi.string();
const players = joi.array([joi.string(), joi.string()]);

const channelSchema = joi.object({
    id: id.required(),
    players: players.required()
});

module.exports = {channelSchema}
