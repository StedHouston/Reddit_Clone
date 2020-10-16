const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';


export const LoggedInAction = (id) => {
    return {
        type: LOGGED_IN,
        loggedIn: true,
        id: id
    }
}

export const LoggedOutAction = () => {
    return {
        type: LOGGED_OUT,
        loggedIn: false,
        id: ''
    }
}



// module.exports = {
//     LoggedInAction,
//     LoggedOutAction,
// }
