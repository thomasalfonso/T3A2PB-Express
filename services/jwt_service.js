const JWT = require('jsonwebtoken');

function generateToken(admin){
    const Token = JWT.sign(
        {
            sub:admin._id
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn: 60 * 60
        }
    )
    return Token;
}

module.exports = {
    generateToken
}