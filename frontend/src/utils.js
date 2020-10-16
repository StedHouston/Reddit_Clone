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

function signupValidations(email, firstName, lastName, userName, password, confirmPassword){
    let errors = [];
    if(!email){
        errors.push('An email was not provided')
    }
    if(!firstName){
        errors.push('A first name was not provided')
    }
    if(!lastName){
        errors.push('A last name was not provided')
    }
    if(!userName){
        errors.push('A user name was not provided')
    }
    if(!password){
        errors.push('A password was not provided')
    }
    if(!confirmPassword){
        errors.push('Please confirm your password')
    }
    if(password !== confirmPassword){
        errors.push('Passwords do not match')
    }
    return errors;
}



module.exports = {
    notEmpty,
    loginValidations,
    signupValidations,
}
