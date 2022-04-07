const joi = require('joi');

const id = joi.string();
const date = joi.date();
const text = joi.text();

module.exports = {
    messagesSchema
}