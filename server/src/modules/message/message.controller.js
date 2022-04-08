//model
const MessageModel = require('./message.model');

//joi
const { messageUpdateSchema } = require('./message.schema');
const { messageCreationSchema } = require('./message.schema');

//utils
const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');

//dependencies
const boom = require('@hapi/boom');

const messageController = {
    verifyMessageCreationFormat: (req, res, next) => {
        const body = req.body;
        const validation = messageCreationSchema.validate(body);
        if(validation.error) next(boom.badRequest('Bad message creation format.'));
        next();
    },

    verifyMessageUpdateFormat: (req, res, next) => {
        const body = req.body;
        const validation = messageUpdateSchema.validate(body);
        if(validation.error) next(boom.badRequest('Bad message update format.'));
        next();
    },

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
        .catch(err => boomErrorMinimizer(boom.notFound(), req, res, null));
    },

    create: (req, res) => {
        const { user, content } = req.body;
        const messageModel = new MessageModel();
        messageModel.create({ 
            user, content,  date : Date.now()
        })
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },

    update: (req, res) => {
        const { content } = req.body;
        const id = req.params.id;
        const upt = {content}
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
