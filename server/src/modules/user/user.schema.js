const joi = require('joi');

const email = joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com', 'net']} });
const password = joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,128}$'));
const url = joi.string().dataUri();

const signUpSchema = joi.object({
    email: email.required(),
    password: password.required()
});


module.exports = {
    signUpSchema
}