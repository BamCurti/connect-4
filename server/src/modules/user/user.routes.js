const router = require('express').Router();

//CREATE
router.post('/', (req, res)=>{
    res.send('User created.')    
});
//DELETE
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('User ' + id + ' deleted.');
});
//GETINFO
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    res.send('User ' + id);
});
//MODIFY
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    res.send(id + ' user modified.');
});


module.exports = router;