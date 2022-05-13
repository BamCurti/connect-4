const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');

class User extends Model {
    constructor() {
        super('User');
    }

    getByEmail(email) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({email: email})
            .then(result => resolve(result))
            .catch(err => reject(boom.internal()));
        })
    }

    saveToken(id, token) {
        const update = {
            token
        }
        return this.update(id, update);
    }

    getByToken(token) {
        return this.collection.findOne({token});
    }

}

module.exports = User;