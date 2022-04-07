const joi = require('joi');

const x = joi.number().min(0).max(7);
const y = joi.number().min(0).max(7);
const color = joi.string().pattern(new RegExp('(red|blue)'));

const moveSchema = joi.object({
    x: x.required(),
    y: y.required(),
    color: color.required(),
});

module.exports = {
    moveSchema,
}