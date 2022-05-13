const router = require('express').Router();
const gameController = require('./game.controller')
const authController = require('./../../auth/auth.controller');

/**
 * @swagger
 * /api/game:
 *   get:
 *     description: Get all the games done.
 *     responses:
 *       200:
 *         description: An array of all the games.
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
 *     description: Create a new game.
 *     parameters:
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the game.
 *         properties:
 *           bluePlayer:
 *             type: string
 *           redPlayer:
 *             type: string
 *     responses:
 *       201:
 *         description: An object with the info of the game.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 insertedId:
 *                   type: string
 *                   description: the id of the game.
 *       400:
 *         description: The petition has an invalid format.
 * 
 * /api/game/{id}:
 *   get:
 *     description: Get a single game.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the game to get.
 *     responses:
 *       200:
 *         description: An object containing the information about the game.
 *       404:
 *         description: The game was not found.
 *   put:
 *     description: Modify an existing game.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the game to update.
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the game.
 *         properties:
 *           bluePlayer:
 *             type: string
 *           redPlayer:
 *             type: string
 *     responses:
 *       200:
 *         description: The game was successfully updated.
 *       404:
 *         description: The game was not found.
 *   delete:
 *     description: Delete an existing game. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the game to get.
 *     responses:
 *       200:
 *         description: the game was successfully deleted.          
 */




router.get('/', 
authController.verifyToken,
gameController.getAll);

router.get('/:id', 
authController.verifyToken,
gameController.get);

router.post('/', 
    authController.verifyToken,
    gameController.verifyGameFormat,
    gameController.create
);

router.put('/:id', 
    authController.verifyToken,
    gameController.verifyGameFormat,
    gameController.update
);

router.delete('/:id', 
authController.verifyToken,    
gameController.delete)

module.exports = router;