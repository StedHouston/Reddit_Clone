const LoggedInReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {loggedIn: action.loggedIn};
        case 'LOGGED_OUT':
            return {loggedIn: action.loggedIn}
        default:
            return state;
    }
}




export default LoggedInReducer;
