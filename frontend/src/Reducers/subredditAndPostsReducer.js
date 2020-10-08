const subredditAndPostsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SUBREDDIT_WITH_POST':
            return {
                subreddit: action.subreddit,
                post: action.post,
            };
        default:
            return state;
    }
}



export default subredditAndPostsReducer;
