const router = require('express').Router();
const messageController = require('./message.controller');

//GET ALL
router.get('/', messageController.getAll);

//GET
router.get('/:id', messageController.get);

//POST
router.post('/', messageController.create);

//UPDATE 
router.put('/:id', messageController.update);

//DELETE
router.delete('/:id', messageController.delete)

module.exports = router;