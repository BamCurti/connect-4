const MoveModel = require('./move.model');
const boomErrorMinimizer = require('./../../core/middlewares/error.handler');
const boom = require('@hapi/boom');

const moveController = {
    getAll: (req, res) => {
        const moveModel = new MoveModel();
        users.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },
    get: (req, res) => {
        const id = req.params.id;
        const moveModel = new MoveModel();
        moveModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(err));
    },
    create: (req, res) => {

    }
}