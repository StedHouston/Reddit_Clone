const SUBREDDIT_LIST = 'SUBREDDIT_LIST';
const SUBREDDIT_WITH_POST = 'SUBREDDIT_WITH_POST';


//fetch all subreddits
export const fetchSubreddits = () => {
    return async (dispatch) => {
        let response = await fetch('https://read-it1.herokuapp.com/subreddits/', {
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
export const subredditsList = (subreddits) => {
    return {
        type: SUBREDDIT_LIST,
        subreddits: subreddits,
    }
}

//action to retrieve subreddit info and posts associated
export const subredditInfoWithPosts = (subreddit, post) => {
    return {
        type: SUBREDDIT_WITH_POST,
        subreddit: subreddit,
        post: post,
    }
}

//fetch search subreddit
export const fetchSubreddit = (searchTerm) => {
    return async (dispatch) => {
        let response = await fetch(`https://read-it1.herokuapp.com/subreddits/single/${searchTerm}`, {
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
export const fetchSubredditAndPosts = (id) => {
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
