//joi
const { userSchema } = require('./user.schema');

//model
const UserModel = require('./user.model');

//utils
const {boomErrorMinimizer} = require('./../../core/middlewares/error.handler');

//dependencies
const boom = require('@hapi/boom');

const userController = {
    verifyUserFormat: (req, res, next) => {
        const body = req.body;
        const validation = userSchema.validate(body);
        if(validation.error) next(boom.badRequest('Bad user format.'));
        next();
    },

    getAll: (req, res) => {
        const userModel = new UserModel();
        userModel.getAll()
        .then(results => res.json({results}))
        .catch(err => res.sendStatus(500));
    },

    get: (req, res) => {
        const id = req.params.id;
        const userModel = new UserModel();
        userModel.get(id)
        .then(result => res.json(result))
        .catch(err => boomErrorMinimizer(boom.notFound(), req, res, null));
    },

    create: (req, res) => {
        const user = req.body;
        const userModel = new UserModel();
        userModel.create(user)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
    },

    update: (req, res) => {
        const { email, password, url } = req.body;
        const id = req.params.id;
        const upt = {email, password, url}
        const userModel = new UserModel();
        userModel.update(id, upt)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },

    delete: (req, res) => {
        const id = req.params.id;
        const userModel = new UserModel();
        userModel.delete(id)
        .then(result => res.status(200).json(result))
        .catch(err => boomErrorMinimizer(err, req, res, null));
    },
}

module.exports = userController;
