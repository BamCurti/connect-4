const jwt = require('jsonwebtoken');
const User = require('./../modules/user/user.model');
const boom = require('@hapi/boom')

const AuthController = {
    sendToken(req, res) {
        const secret = process.env.JWT_SECRET;
        const id = req.user._id;
        const date = new Date();
        const payload = {
            id,
            date
        }

        const token = jwt.sign(payload, secret, {expiresIn: '86400s'});

        const user = new User();
        user.saveToken(id, token)
        .then(doc => {
            res.json({id, token});
        })
        .catch(err => {
            res.json({
                message: "No se pudo guardar el token :("
            });
        })
    },

    verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if(!bearerHeader) next(boom.unauthorized());

        const bearer = bearerHeader.split(' ');
        const token = bearer[1];

        const user = new User();
        user.getByToken(token)
        .then(doc => {

            if(doc?.token){
                next();
            }
            else next(boom.unauthorized())
        })

    }

}

module.exports = AuthController;