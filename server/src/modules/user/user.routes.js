const router = require('express').Router();
const userController = require('./user.controller');

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Get all the user created.
 *     responses:
 *       200:
 *         description: An array of all the users.
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
 *     description: Create a new user.
 *     parameters:
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the user.
 *         properties:
 *           email:
 *             type: string
 *           password:
 *             type: string
 *           url:
 *             type: string
 *     responses:
 *       201:
 *         description: An object with the info of the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 insertedId:
 *                   type: string
 *                   description: the id of the user.
 *       400:
 *         description: The petition has an invalid format.
 * 
 * /api/user/{id}:
 *   get:
 *     description: Get a single user.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the user.
 *     responses:
 *       200:
 *         description: An object containing the information about the user.
 *       404:
 *         description: The user was not found.
 *   put:
 *     description: Modify an existing user.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the user to update.
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the user.
 *         properties:
 *           email:
 *             type: string
 *           password:
 *             type: string
 *           url:
 *             type: string
 *     responses:
 *       200:
 *         description: The user was successfully updated.
 *       404:
 *         description: The user was not found.
 *   delete:
 *     description: Delete an existing user. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the user.
 *     responses:
 *       200:
 *         description: the user was successfully deleted.          
 */

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