const LoggedInReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {
                loggedIn: action.loggedIn,
                id: action.id
            };
        case 'LOGGED_OUT':
            return {
                loggedIn: action.loggedIn,
                id: ''
            }
        default:
            return state;
    }
}




export default LoggedInReducer;
