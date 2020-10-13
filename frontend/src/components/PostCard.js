import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { subredditInfoWithPosts } from '../Actions/subreddits';
import PostPage from './PostPage';
import './PostCard.css';


function PostCard(props) {

    let { Post, userId, deletePost } = props;
    let subreddit = props.subreddit;
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [numComments, setNumComments] = useState(0)

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

            let response2 = await fetch(`http://localhost:8080/subreddits/${subreddit.id}/posts/${Post.id}/comments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let comments = await response2.json()
            console.log(comments)


            setFirstName(fullname.firstName)
            setLastName(fullname.lastName)
            setNumComments(comments.length)


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
                            <div style={{marginTop: '2px'}}>{numComments} Comments</div>
                            { userId === Post.userId ? <button className="PostPage__Button" onClick={()=> deletePost(subreddit.id, userId, Post.id)}>Delete</button> : <div></div>}
                        </div>
                    </div>
                </div>
            </div>

    )





}





export default PostCard;
