function notEmpty(obj){
    return Object.keys(obj).length > 0;
}


function loginValidations(email, password){
    let errors = []
    if(!email){
        errors.push('Please enter an email address')
    }
    if(!password){
        errors.push('Please enter a password')
    }
    return errors
}





module.exports = {
    notEmpty,
    loginValidations
}
