const ChannelModel = require('./channel.model')

const boom = require('@hapi/boom');

const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');

const { channelSchema } =  require('./channel.schema');

const channelController = {
    verifyChannelFormat: (req, res, next) => {
        const body = req.body;
        const validation = channelSchema.validate(body);
        if(validation.error) next(boom.badRequest('Bad channel format.'));
        next();
    },
    getAll: (req, res) => {
        const channelModel = new ChannelModel();
        channelModel.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },
    get: (req, res) => {
        const id = req.params.id;
        const channelModel = new ChannelModel();
        channelModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },
    create: (req, res) => {
        const channel = req.body;
        channel.messages = [];
        const channelModel = new ChannelModel();
        channelModel.create(channel)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },
    update: (req, res) => {
        const { players } = req.body;
        const id = req.params.id;
        const upt = {
            players
        }
        const channelModel = new ChannelModel();
        channelModel.update(id, upt)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },
    delete: (req, res) => {
        const id = req.params.id;
        const channelModel = new ChannelModel();
        channelModel.delete(id)
        .then(result => res.status(200).json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    }
}

module.exports = channelController;