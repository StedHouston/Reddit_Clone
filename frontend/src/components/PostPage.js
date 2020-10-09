import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AboutCommunity from './AboutCommunity';
import Comment from './Comment';
import './PostPage.css';





function PostPage(){

    const { subreddit, post } = useSelector(state => state.subredditAndPostsReducer)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [comments, setComments] = useState([])


    useEffect(() => {
        async function fetchData(){

            //fetch user name of author of post
            let response = await fetch(`http://localhost:8080/users/${post.userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let fullname = await response.json()


            //Fetch all comments for given post
            let response2 = await fetch(`http://localhost:8080/subreddits/${subreddit.id}/posts/${post.id}/comments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let allComments = await response2.json()

            //set comments and author of post in state
            setComments(allComments)
            setFirstName(fullname.firstName)
            setLastName(fullname.lastName)



        }
        fetchData();


    },[])

    return (
        <>
            <div className="PostPage">
                <div className="PostPage__Container">
                    <div className="PostPage__PostandComments">
                        <div className="PostPage__Post">
                            <div style={{color: 'rgb(152,155,157)', marginBottom: '10px'}}>r/{subreddit.title} Posted by u/{firstName} {lastName}</div>
                            <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px'}}>{post.title}</div>
                            <div style={{marginBottom: '10px'}}>{post.content}
                            </div>
                            <div style={{color: 'rgb(135,138,140)', marginBottom: '15px'}}>
                                {Object.keys(comments).length} comments
                            </div>
                            <div style={{color: 'rgb(49,115,220)', fontWeight: 'bold'}}>
                                Commenting as Blak06
                            </div>
                            <textarea style={{height: '200px', width:'100%', fontSize: '20px', marginBottom: '20px', padding: '15px'}}></textarea>
                            {comments ? comments.map(comment => <Comment comment={comment}/>) : <div></div>}
                        </div>
                    </div>
                    <div className="PostPage__About">
                        r/Bitcoin
                        <div>For discussion about Litecoin, the leading cryptocurrency derived from Bitcoin. Litecoin is developed with a focus on speed, efficiency, and wider initial coin distribution through the use of scrypt-based mining.</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PostPage;
