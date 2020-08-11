const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';


const LoggedInAction = () => {
    return {
        type: LOGGED_IN,
        loggedIn: true,
    }
}

const LoggedOutAction = () => {
    return {
        type: LOGGED_OUT,
        loggedIn: false,
    }
}



module.exports = {
    LoggedInAction,
    LoggedOutAction,
}
