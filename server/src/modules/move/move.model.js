const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class Move extends Model {
    constructor() {
        super('Move');
    }
}

module.exports = Move;