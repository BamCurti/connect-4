const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class User extends Model {
    constructor() {
        super('User');
    }
}

module.exports = User;