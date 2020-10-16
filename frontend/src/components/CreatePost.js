import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './CreatePost.css';




function CreatePost(){

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const history = useHistory()
    const { loggedIn } = useSelector(state => state.LoggedInReducer)


    async function handleSubmit() {
        setErrors([])
        if(!loggedIn){
            setErrors(['Please signin to post'])
            return;
        }
        if(!title){
            setErrors(errors => [...errors, 'A title is required'])
            return;
        }
        if(!content){
            setErrors(errors => [...errors, 'Content is required'])
            return;
        }
        if(!title || !content){
            return;
        }


        let token = localStorage.getItem('token')

        if(token !== null){
            let response = await fetch(`https://read-it1.herokuapp.com/subreddits/${id}/create_post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "title": title,
                    "content": content
                })
            })
            setErrors([])
            let results = await response.json()
            history.push(`/subreddits/${id}`)
        }else{
            setErrors(errors => [...errors, 'Please sign in to post'])

        }
    }

    let errorsToRender;

    if(errors[0] !== null){
        errorsToRender = errors.map(error => {
            return <div className="CreatePost__errors" key={error} >{error}</div>
        })
    }else{
        errorsToRender = <div></div>
    }



    return (

        <div className="CreatePost">
            <div>{errorsToRender}</div>
            <div className="CreatePost__Create_a_post">Create a post</div>
            <div className="CreatePost__Box">
                <div className="field">
                    <label className="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div className="field-body">
                    <div class="field" style={{width: '350px'}}>
                        <label class="label">Content</label>
                        <div class="control" style={{width: '100%'}}>
                            <textarea style={{width: '100%'}} class="textarea" placeholder="Text" value={content} onChange={(e) => setContent(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} className="Button">Post</button>
            </div>
        </div>
    )

}




export default CreatePost;
