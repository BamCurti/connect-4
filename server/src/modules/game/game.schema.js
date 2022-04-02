const joi = require('joi');

const id = joi.string();
const winner = joi.string();
const bluePlayer = joi.string();
const redPlayer = joi.string();
const datetime = joi.date();
const detail = joi.array([joi.string()]);

const gameSchema = joi.object({
    id: id.required(),
    winner: winner.required(),
    bluePlayer: bluePlayer.required(),
    redPlayer: redPlayer.required(),
    datetime: datetime.required(),
    detail: detail.required()
});

module.exports = {
    gameSchema
}