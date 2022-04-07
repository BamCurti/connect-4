const router = require('express').Router();
const moveController = require('./move.controller');

/**
 * @swagger
 * /api/move:
 *   get:
 *     description: Get all the moves done.
 *     responses:
 *       200:
 *         description: An array of all the moves.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string      
 *
 *   post:
 *     description: Create a new move.
 *     parameters:
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the move.
 *         properties:
 *           x:
 *             type: number
 *           y:
 *             type: number
 *           color:
 *             type: string
 *     responses:
 *       201:
 *         description: An object with the info of the move.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 insertedId:
 *                   type: string
 *                   description: the id of the move.
 *       400:
 *         description: The petition has an invalid format.
 * 
 * /api/move/{id}:
 *   get:
 *     description: Get a single move.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the move to get.
 *     responses:
 *       200:
 *         description: An object containing the information about the move.
 *       404:
 *         description: The move was not found.
 *   put:
 *     description: Modify an existing move.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the move to update.
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the move.
 *         properties:
 *           x:
 *             type: number
 *           y:
 *             type: number
 *           color:
 *             type: string
 *     responses:
 *       200:
 *         description: The move was successfully updated.
 *       404:
 *         description: The move was not found.
 *   delete:
 *     description: Delete an existing move. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the move to get.
 *     responses:
 *       200:
 *         description: the move was successfully deleted.          
 */



router.get('/', moveController.getAll);

router.get('/:id', moveController.get);

router.post('/', 
    moveController.verifyMoveFormat,
    moveController.create
);

router.put('/:id', 
    moveController.verifyMoveFormat,
    moveController.update
);

router.delete('/:id', moveController.delete)

module.exports = router;