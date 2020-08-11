const SUBREDDIT_LIST = 'SUBREDDIT_LIST';
const SUBREDDIT_WITH_POSTS = 'SUBREDDIT_WITH_POSTS';


//fetch all subreddits
const fetchSubreddits = () => {
    return async (dispatch) => {
        let response = await fetch('http://localhost:8080/subreddits/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let subreddits = await response.json()
        dispatch(subredditsList(subreddits))
    }
}
//action for the search results on homepage
const subredditsList = (subreddits) => {
    return {
        type: SUBREDDIT_LIST,
        subreddits: subreddits,
    }
}

//action to retrieve subreddit info and posts associated
const subredditInfoWithPosts = (subreddit, posts) => {
    return {
        type: SUBREDDIT_WITH_POSTS,
        subreddit: subreddit,
        posts: posts,
    }
}

//fetch search subreddit
const fetchSubreddit = (searchTerm) => {
    return async (dispatch) => {
        let response = await fetch(`http://localhost:8080/subreddits/single/${searchTerm}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let SearchResults = await response.json()
        dispatch(subredditsList(SearchResults))
    }
}

//fetch subreddit info and all posts
const fetchSubredditAndPosts = (id) => {
    return async (dispatch) => {
        let response = await fetch(`http://localhost:8080/subreddits/${id}/withPosts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let results = await response.json()
        console.log(results);
        console.log(results[1])
        // dispatch(subredditInfoWithPosts(results))
    }
}


module.exports = {
    subredditsList,
    fetchSubreddits,
    fetchSubreddit,
    fetchSubredditAndPosts,
}
