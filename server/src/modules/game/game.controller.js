const boom = require('@hapi/boom')

const { gameSchema } = require('./game.schema');

const gameController = {
    create: (req, res) => {
        console.log('Creating Game');
        const body = req.body;
        res.json(body);
    },
    gameVerify: (req, res, next) => {
        const body = req.body;
        const validation = gameSchema.validate(body);

        if(validation.error) next(boom.badRequest());
        next();
    }
}

module.exports = gameController;