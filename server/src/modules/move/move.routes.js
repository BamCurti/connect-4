const router = require('express').Router();
const moveController = require('./move.controller');

router.get('/', moveController.getAll);

router.get('/:id', moveController.get)

router.post('/', moveController.create)

router.put('/:id', (req,res) => {
    const id = req.params.id;
    res.json({
        ...req.body,
        id
    });
});

router.delete('/:id', moveController.delete)

module.exports = router;