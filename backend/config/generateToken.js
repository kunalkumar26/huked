const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (id) => {    
    return jwt.sign({payload: id}, process.env.JWT_KEY, {
        expiresIn: '30d'
    });
}

module.exports = generateToken;