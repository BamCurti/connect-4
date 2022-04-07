const router = require('express').Router();
const userController = require('./user.controller');

//GET ALL
router.get('/', userController.getAll);

//GET
router.get('/:id', userController.get);

//POST
router.post('/', userController.create);

//UPDATE 
router.put('/:id', userController.update);

//DELETE
router.delete('/:id', userController.delete)

module.exports = router;