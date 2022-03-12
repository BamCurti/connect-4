const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Moves');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`move ${id}`);
})

router.post('/', (req, res) => {
    res.json({
        ...req.body,
    });
})

router.put('/:id', (req,res) => {
    const id = req.params.id;
    res.json({
        ...req.body,
        id
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ...req.body,
        id
    });
})

module.exports = router;