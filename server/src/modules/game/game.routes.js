const router = require('express').Router();

//CREATE
router.post('/', (req, res)=>{
    res.send('Game created')    
});
//DELETE
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('Game ' + id + ' deleted.');
});
//GETINFO
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('Game ' + id);
});
//MODIFY
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    res.send(id + 'Game modified');
});

module.exports = router;