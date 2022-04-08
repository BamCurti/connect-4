const joi = require('joi');

const bluePlayer = joi.string();
const redPlayer = joi.string();


const gameSchema = joi.object({
    bluePlayer: bluePlayer.required(),
    redPlayer: redPlayer.required()
});

module.exports = {
    gameSchema
}