//dependencies
const MessageModel = require('./message.model');
const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');
const boom = require('@hapi/boom');

const messageController = {
    getAll: (req, res) => {
        const messageModel = new MessageModel();
        messageModel.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },

    get: (req, res) => {
        const id = req.params.id;
        const messageModel = new MessageModel();
        messageModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },

    create: (req, res) => {
        const message = req.body;
        const messageModel = new MessageModel();
        messageModel.create(message)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },

    update: (req, res) => {
        const { message } = req.body;
        const id = req.params.id;
        const upt = {message}
        const messageModel = new MessageModel();
        messageModel.update(id, upt)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },

    delete: (req, res) => {
        const id = req.params.id;
        const messageModel = new MessageModel();
        messageModel.delete(id)
        .then(result => res.status(200).json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },
}

module.exports = messageController;
