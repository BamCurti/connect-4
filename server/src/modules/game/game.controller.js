const GameModel = require('./game.model');

const boom = require('@hapi/boom');

const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');

const { gameSchema } = require('./game.schema');

const gameController = {
    verifyGameFormat: (req, res, next) => {
        const body = req.body;
        const validation = gameSchema.validate(body);
        if(validation.error) next(boom.badRequest('Bad game format'));
        next();
    },
    getAll: (req, res) => {
        const gameModel = new GameModel();
        gameModel.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },
    get: (req,res) => {
        const id = req.params.id;
        const gameModel = new GameModel();
        gameModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(boom.notFound(), req, res, null));
    },
    create: (req, res) => {
        const game = req.body;
        game.details = [];
        game.date = Date.now();
        game.isActive = true;
        const gameModel = new GameModel();
        gameModel.create(game)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },
    update: (req, res) => {
        const { bluePlayer,redPlayer } = req.body;
        const id = req.params.id;
        const upt = {
            bluePlayer,redPlayer
        }
        const gameModel = new GameModel();
        gameModel.update(id, upt)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },
    delete: (req, res) => {
        const id = req.params.id;
        const gameModel = new GameModel();
        gameModel.delete(id)
        .then(result => res.status(200).json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    }
}

module.exports = gameController;