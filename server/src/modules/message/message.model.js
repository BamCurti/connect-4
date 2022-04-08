const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class Message extends Model {
    constructor() {
        super('Message');
    }
}

module.exports = Message;