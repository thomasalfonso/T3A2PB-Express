const JWT = require('jsonwebtoken');
const expiry = '1m';

function generateToken(admin){
    const Token = JWT.sign(
        {
            sub:admin._id,
            expiresIn: expiry
        }, 
        process.env.JWT_SECRET
    )
    return Token;
}

module.exports = {
    generateToken
}