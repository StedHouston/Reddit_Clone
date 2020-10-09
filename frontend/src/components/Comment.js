import React, { useState, useEffect } from 'react';
import './Comment.css'




function Comment(props){

    let { comment } = props;

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

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

    return (
        <div className="Comment">
            <div style={{color: 'rgb(152,155,157)', marginBottom: '10px'}}>u/{firstName} {lastName}</div>
            <div style={{fontSize: '15px'}}>
            {comment.content}
            </div>
        </div>
    )

}

export default Comment;
