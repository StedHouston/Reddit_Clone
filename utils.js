const jwt = require('jsonwebtoken')
const { User } = require('./models')

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

//verify login data sent in from client
function verifyLoginInfo(req, res, next){
    let { email, password } = req.body;
    let errors = [];
    if(!email){
        errors.push('Please enter an email address')
    }
    if(!password){
        errors.push('Please enter a password')
    }
    if(errors.length > 0){
        req.errors = errors;
    }

    next()
}

//verify signup data sent in from client
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
        errors.push('Please enter your password in the confirm password field')
    }
    if(firstName.length > 20){
        errors.push('First name must be less than 21 characters')
    }
    if(lastName.length > 20){
        errors.push('Last name must be less than 21 characters')
    }
    if(userName.length > 25){
        errors.push('Username must be less than 26 characters')
    }
    if(email.length > 50){
        errors.push('Email must be less than 51 characters')
    }
    if(password !== confirmPassword){
        errors.push('Passwords do not match')
    }
    req.errors = errors;
    next();

}





module.exports = {
    asyncHandler,
    verifyToken,
    verifyLoginInfo,
    verifySignupInfo
}
