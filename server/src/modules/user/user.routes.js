const router = require('express').Router();
const userController = require('./user.controller');

//CREATE
router.post('/', 
    userController.signUpVerify,
    userController.create
);

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