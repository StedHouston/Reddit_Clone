const subredditAndPostsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SUBREDDIT_WITH_POSTS':
            return {
                subreddit: action.subreddit,
                Posts: action.posts,
            };
        default:
            return state;
    }
}



export default subredditAndPostsReducer;
