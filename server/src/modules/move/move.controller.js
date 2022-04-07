const MoveModel = require('./move.model');
const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');
const boom = require('@hapi/boom');

const moveController = {
    getAll: (req, res) => {
        const moveModel = new MoveModel();
        moveModel.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },
    get: (req, res) => {
        const id = req.params.id;
        const moveModel = new MoveModel();
        moveModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },
    create: (req, res) => {
        const move = req.body;
        const moveModel = new MoveModel();
        moveModel.create(move)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },
    update: (req, res) => {
        const { x, y, color } = req.body;
        const id = req.params.id;
        const upt = {
            x, y, color
        }
        const moveModel = new MoveModel();
        moveModel.update(id, upt)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },
    delete: (req, res) => {
        const id = req.params.id;
        const moveModel = new MoveModel();
        moveModel.delete(id)
        .then(result => res.status(200).json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },
}

module.exports = moveController;