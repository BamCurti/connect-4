const joi = require('joi');

const email = joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com', 'net', 'gmail']} });
const password = joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,128}$'));
const url = joi.string().dataUri();

const userSchema = joi.object({
    email: email.required(),
    password: password.required(),
    url: url
});


module.exports = {
    userSchema
}