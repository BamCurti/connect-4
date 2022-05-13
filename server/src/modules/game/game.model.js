const Model = require('./../../core/db/model');
const boom = require('@hapi/boom');
const { ObjectId } = require('mongodb');

class Game extends Model {
    constructor() {
        super('Game');
    }

    addMove(id, moveId) {
        const criteria = {
            _id: ObjectId(id)
        }

        const change = {
            $push: {
                details: moveId
            }
        }

        this.collection.update(criteria,  change).then(result => console.log(result)).catch(err => console.error(err));
    }

}

module.exports = Game;