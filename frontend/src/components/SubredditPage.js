import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import './SubredditPage.css';
import SubredditHeader from './SubredditHeader';
import PostCard from './PostCard';
import AboutCommunity from './AboutCommunity';
import { useSelector } from 'react-redux';



function SubredditPage() {
    let { id } = useParams();
    let history = useHistory();
    const [subreddit, setSubreddit] = useState({});
    const [Posts, setPosts] = useState([]);
    const { id : userId } = useSelector(state => state.LoggedInReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
        async function fetchData(){
            //retreives subreddit information
            let response = await fetch(`https://read-it1.herokuapp.com/subreddits/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let results = await response.json()
            setSubreddit(results[0])

            //retreives posts for subreddit
            let response2 = await fetch(`https://read-it1.herokuapp.com/subreddits/${id}/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let retreivedPosts = await response2.json()
            setPosts(retreivedPosts)
        }
        fetchData();


    },[])

    async function deletePost(subredditId, userId, postId){
        let response = await fetch(`https://read-it1.herokuapp.com/subreddits/${subredditId}/delete_post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "postId": postId,
                    "userId": userId
                })

        })
        let results = await response.json()

        let response2 = await fetch(`https://read-it1.herokuapp.com/subreddits/${id}/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        })
        let retreivedPosts = await response2.json()
        setPosts(retreivedPosts)
    }

    return (
        <>
            <SubredditHeader subreddit={subreddit}/>
            <div className="SubredditPage__Body">
                <div className="SubredditPage__Posts">
                    <p className="control" style={{width: "100%", marginTop: '15px'}}>
                        <button className="SubredditPage__Button button is-link" onClick={() => history.push(`/subreddits/${id}/create_post`)} type="button">Create a post </button>
                    </p>
                    {Posts.map(Post =>
                        <PostCard key={Post.id} Post={Post} subreddit={subreddit} userId={userId} deletePost={deletePost}/>
                    )}
                </div>
                <AboutCommunity subreddit={subreddit}/>
            </div>
        </>
    )


}




export default SubredditPage;
