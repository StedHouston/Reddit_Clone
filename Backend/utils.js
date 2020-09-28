const jwt = require('jsonwebtoken')
const { User } = require('../Backend/models')

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

function verifyLoginInfo(req, res, next){
    let { email, password } = req.body;
    let errors = [];
    if(!email){
        errors.push('Please enter an email address')
    }
    if(!password){
        errors.push('Please enter a password')
    }

    req.errors = errors;
    next()
}

function verifySignupInfo(req, res, next){
    let { email, userName, firstName, lastName, password, confirmPassword } = req.body;
    let errors = [];
    if(!email){
        errors.push('Please enter an email address')
    }
    if(!userName){
        errors.push('Please enter a user name')
    }
    if(!firstName){
        errors.push('Please enter your first namne')
    }
    if(!lastName){
        errors.push('Please enter your last name')
    }
    if(!password){
        errors.push('Please enter a password')
    }
    if(!confirmPassword){
        errors.push('Please enter your password again to confirm')
    }

}





module.exports = {
    asyncHandler,
    verifyToken,
    verifyLoginInfo
}
