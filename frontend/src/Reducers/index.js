import { combineReducers } from 'redux';
import subredditsReducer from './subredditsReducer';
import subredditAndPostsReducer from './subredditAndPostsReducer';
import LoggedInReducer from './LoggedInReducer';




const rootReducer = combineReducers({
    subreddits: subredditsReducer,
    subredditAndPostsReducer,
    LoggedInReducer
})



export default rootReducer;
