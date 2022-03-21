//dependencies
const boom = require('@hapi/boom');

//user imports
const { signUpSchema } = require('./user.schema');

const userController = {
    create: (req, res) => {
        console.log('Creating user')
        const body = req.body;
        res.json(body);
    },
    signUpVerify: (req, res, next) => {
        const body = req.body;
        const validation = signUpSchema.validate(body);
        
        //if validation has errors, we send a bad request message
        if(validation.error) next(boom.badRequest());
        next();
    }
}

module.exports = userController;