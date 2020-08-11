const jwt = require('jsonwebtoken')


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);




//Verify Json Web Token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next()
    }else{
        res.json('messsage: No token')
    }
}







module.exports = {
    asyncHandler,
    verifyToken,
}
