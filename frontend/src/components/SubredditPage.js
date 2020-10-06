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
        async function fetchData(){
            let response = await fetch(`http://localhost:8080/subreddits/${id}/withPosts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let results = await response.json()
            setSubreddit(results[0])

            let response2 = await fetch(`http://localhost:8080/subreddits/${id}/posts`, {
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

    return (
        <>
            <SubredditHeader subreddit={subreddit}/>
            <div className="SubredditPage__Body">
                <div className="SubredditPage__Posts">
                    <p className="control" style={{width: "80%", marginTop: '15px'}}>
                    <button className="button is-link SubredditPage__Button" onClick={() => history.push(`/subreddits/${id}/create_post`)} type="button">Create a post </button>
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
