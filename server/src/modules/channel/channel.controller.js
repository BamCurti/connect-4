const boom = require('@hapi/boom');

const { channelSchema } =  require('./channel.schema');

const channelController = {
    create: (req,res) => {
        console.log('Game created');
        const body = req.body;
        res.json(body);
    },
    channelVerify: (req, res, next) => {
        const body = req.body;
        const validation = channelSchema.validate(body);

        if(validation.error) next(boom.badRequest());
        next();
    }
}

module.exports = channelController;