//dependencies
const boom = require('@hapi/boom');

//message imports
const { messagesSchema } = require('./message.schema');

const messagesController = {

    create: (req, res) => {
        console.log('Creating message')
        const body = req.body;
        res.json(body);
    },

    delete: (req, res) => {
        console.log('Deleting message')
        const body = req.body;
        res.json(body);
    }
}
