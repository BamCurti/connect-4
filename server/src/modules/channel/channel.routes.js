const router = require('express').Router();

//CREATE
router.post('/', (req, res)=>{
    res.send('Channel created')    
});
//DELETE
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('Channel ' + id + ' deleted.');
});
//GETINFO
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('Channel ' + id);
});
//MODIFY
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    res.send(id + 'Channel modified');
});

module.exports = router;