import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { subredditInfoWithPosts } from '../Actions/subreddits';
import PostPage from './PostPage';
import './PostCard.css';


function PostCard(props) {

    let Post = props.Post;
    let subreddit = props.subreddit;
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    let dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){

            let response = await fetch(`http://localhost:8080/users/${Post.userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let fullname = await response.json()
            setFirstName(fullname.firstName)
            setLastName(fullname.lastName)


        }
        fetchData();


    },[])

    async function goToPosts(){
        dispatch(subredditInfoWithPosts(subreddit, Post))

    }

    return (

            <div className="PostCard">
                <div className="PostCard__leftPanel">

                </div>
                <div className="PostCard__Body">
                    <div className="PostCard__Body--text">
                        <div className="PostCard__Body--postedBy">
                            Posted by u/{firstName} {lastName}
                        </div>
                        <Link to={{
                            pathname:`/subreddits/${Post.subredditId}/post/${Post.id}`}} onClick={goToPosts}>
                            <div className="PostCard__Body--title">
                                {Post.title}
                            </div>
                        </Link>
                        <div className="PostCard__Body--content">
                            {Post.content}
                        </div>
                        <div className="PostCard__Body--comments">
                            20 Comments
                        </div>
                    </div>
                </div>
            </div>

    )





}





export default PostCard;
