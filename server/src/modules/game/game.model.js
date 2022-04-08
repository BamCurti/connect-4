const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class Game extends Model {
    constructor() {
        super('Game');
    }
}

module.exports = Game;