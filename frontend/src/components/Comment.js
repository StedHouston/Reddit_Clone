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
            let response = await fetch(`http://localhost:8080/users/${comment.userId}`, {
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

    // async function deleteComment() {
    //     let response = await fetch(`http://localhost:8080/comments/delete_comment`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`
    //             },
    //             body: JSON.stringify({
    //                 "commentUserId": comment.userId,
    //                 "commentId": comment.id
    //             })
    //     })

    //     let result = await response.json()
    //     console.log(result)
    //     history.goBack()

    // }

    return (
        <div className="Comment">
            <div style={{color: 'rgb(152,155,157)', marginBottom: '10px'}}>u/{firstName} {lastName}</div>
            <div style={{fontSize: '15px'}}>
            {comment.content}
            </div>
            {id === comment.userId ? <button className="delete-btn button is-info" onClick={() => deleteComment(comment.userId, comment.id, subredditId, postId )}>Comment</button> : <div></div>}
        </div>
    )

}

export default Comment;
