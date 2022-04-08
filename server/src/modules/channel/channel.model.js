const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class Channel extends Model {
    constructor() {
        super('Channel');
    }
}

module.exports = Channel;