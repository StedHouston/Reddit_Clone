import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import './SubredditPage.css';
import SubredditHeader from './SubredditHeader';
import PostCard from './PostCard';
import AboutCommunity from './AboutCommunity';
import { useDispatch } from 'react-redux';
import fetchSubredditAndPosts from '../Actions/subreddits';



function SubredditPage() {
    let { id } = useParams();
    let dispatch = useDispatch();
    let history = useHistory();
    const [subreddit, setSubreddit] = useState({});
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        async function fetchData(){
            //retreives subreddit information
            let response = await fetch(`http://localhost:8080/subreddits/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let results = await response.json()
            console.log(results)
            setSubreddit(results[0])

            //retreives posts for subreddit
            let response2 = await fetch(`http://localhost:8080/subreddits/${id}/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let retreivedPosts = await response2.json()
            console.log(retreivedPosts)
            setPosts(retreivedPosts)
        }
        fetchData();


    },[])

    return (
        <>
            <SubredditHeader subreddit={subreddit}/>
            <div className="SubredditPage__Body">
                <div className="SubredditPage__Posts">
                    <p className="control" style={{width: "100%", marginTop: '15px'}}>
                        <button className="SubredditPage__Button button is-link" onClick={() => history.push(`/subreddits/${id}/create_post`)} type="button">Create a post </button>
                    </p>
                    {Posts.map(Post =>
                        <PostCard key={Post.id} Post={Post} subreddit={subreddit}/>
                    )}
                </div>
                <AboutCommunity subreddit={subreddit}/>
            </div>
        </>
    )


}




export default SubredditPage;
