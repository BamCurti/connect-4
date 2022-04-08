const router = require('express').Router();
const messageController = require('./message.controller');

/**
 * @swagger
 * /api/message:
 *   get:
 *     description: Get all the messages created.
 *     responses:
 *       200:
 *         description: An array of all the messages.
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
 *     description: Create a new message.
 *     parameters:
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the message.
 *         properties:
 *           user:
 *             type: string
 *           content:
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
 *                   description: the id of the message.
 *       400:
 *         description: The petition has an invalid format.
 * 
 * /api/message/{id}:
 *   get:
 *     description: Get a single message.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the message.
 *     responses:
 *       200:
 *         description: An object containing the information about the message.
 *       404:
 *         description: The message was not found.
 *   put:
 *     description: Modify an existing message.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the message to update.
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the message.
 *         properties:
 *           content:
 *             type: string
 *     responses:
 *       200:
 *         description: The message was successfully updated.
 *       404:
 *         description: The message was not found.
 *   delete:
 *     description: Delete an existing message. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the message.
 *     responses:
 *       200:
 *         description: the message was successfully deleted.          
 */

//GET ALL
router.get('/', messageController.getAll);

//GET
router.get('/:id', messageController.get);

//POST
router.post('/', messageController.create);

//UPDATE 
router.put('/:id', messageController.update);

//DELETE
router.delete('/:id', messageController.delete)

module.exports = router;