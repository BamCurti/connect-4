const router = require('express').Router();
const channelController = require('./channel.controller')

/**
 * @swagger
 * /api/channel:
 *   get:
 *     description: Get all the channels done.
 *     responses:
 *       200:
 *         description: An array of all the channels.
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
 *     description: Create a new channel.
 *     parameters:
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the channel.
 *         properties:
 *           players:
 *             type: string
 *     responses:
 *       201:
 *         description: An object with the info of the channel.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 insertedId:
 *                   type: string
 *                   description: the id of the channel.
 *       400:
 *         description: The petition has an invalid format.
 * 
 * /api/channel/{id}:
 *   get:
 *     description: Get a single channel.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the channel to get.
 *     responses:
 *       200:
 *         description: An object containing the information about the channel.
 *       404:
 *         description: The channel was not found.
 *   put:
 *     description: Modify an existing channel.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the channel to update.
 *       - in: body
 *         required: true
 *         type: object
 *         description: All the information about the channel.
 *         properties:
 *           players:
 *             type: string
 *     responses:
 *       200:
 *         description: The channel was successfully updated.
 *       404:
 *         description: The channel was not found.
 *   delete:
 *     description: Delete an existing channel. 
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The id of the channel to get.
 *     responses:
 *       200:
 *         description: the channel was successfully deleted.          
 */


router.get('/', channelController.getAll);

router.get('/:id', channelController.get);

router.post('/', 
    channelController.verifyChannelFormat,
    channelController.create
);

router.put('/:id', 
    channelController.verifyChannelFormat,
    channelController.update
);

router.delete('/:id', channelController.delete)


module.exports = router;