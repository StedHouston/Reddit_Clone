import React, { useState, useEffect } from 'react';
import './PostCard.css';


function PostCard(props) {

    let Post = props.Post;
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        async function fetchData(){

            let response = await fetch(`http://localhost:8080/users/${Post.userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let fullname = await response.json()
            console.log(fullname)
            setFirstName(fullname.firstName)
            setLastName(fullname.lastName)


        }
        fetchData();


    },[])

    return (
        <div className="PostCard">
            <div className="PostCard__leftPanel">

            </div>
            <div className="PostCard__Body">
                <div className="PostCard__Body--text">
                    <div className="PostCard__Body--postedBy">
                        Posted by u/{firstName} {lastName}
                    </div>
                    <div className="PostCard__Body--title">
                        {Post.title}
                    </div>
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
