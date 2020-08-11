import subredditsList from '../Actions/subreddits';


const subredditsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SUBREDDIT_LIST':
            return {subreddits: action.subreddits};
        default:
            return state;
    }
}





export default subredditsReducer;
