import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Comment.css'




function Comment(props){

    let { comment, id, deleteComment, subredditId, postId } = props;

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const history = useHistory()

    useEffect(() => {
        async function fetchData(){

            //fetch user name of author of comment
            let response = await fetch(`https://read-it1.herokuapp.com/users/${comment.userId}`, {
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

    return (
        <div className="Comment">
            <div style={{color: 'rgb(152,155,157)', marginBottom: '10px'}}>u/{firstName} {lastName}</div>
            <div className="Comment__commentandbutton">
                <div style={{fontSize: '15px'}}>
                    {comment.content}
                </div>
                {id === comment.userId ? <button className="delete-btn button" onClick={() => deleteComment(comment.userId, comment.id, subredditId, postId )}>Delete</button> : <div></div>}
            </div>
        </div>
    )

}

export default Comment;
