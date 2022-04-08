const joi = require('joi');

const user = joi.string();
const content = joi.string();


const messageCreationSchema = joi.object({
    user : user.required(),
    content: content.required()
});

const messageUpdateSchema = joi.object({
    content : content.required()
})

module.exports = {
    messageCreationSchema, 
    messageUpdateSchema
}