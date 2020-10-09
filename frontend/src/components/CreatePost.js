import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './CreatePost.css';




function CreatePost(){

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const history = useHistory()
    // const [id, setId] = useState(id)


    async function handleSubmit() {
        setErrors([])
        if(!title){
            console.log("inside title")
            setErrors(errors => [...errors, 'A title is required'])
        }
        if(!content){
            console.log("inside content")
            setErrors(errors => [...errors, 'Content is required'])
        }
        if(!title || !content){
            console.log("inside return")
            return;
        }

        let token = localStorage.getItem('token')
        console.log(token)

        if(token !== null){
            let response = await fetch(`http://localhost:8080/subreddits/${id}/create_post`, {
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
            console.log("mapping")
            console.log(error)
            return <div className="CreatePost__errors" key={error} >{error}</div>
        })
    }else{
        errorsToRender = <div></div>
    }


    console.log(errors)

    return (

        <div className="CreatePost">
            <div>{errorsToRender}</div>
            <div className="CreatePost__Create_a_post">Create a post</div>
            <div className="CreatePost__Box">
                <div className="CreatePost__Box--Header">
                </div>
                <div className="CreatePost__Box--inputarea">
                    <input className="CreatePost__Box--Title" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title"/>
                    <textarea type="text-area" className="CreatePost__Box--Content" onChange={(e) => setContent(e.target.value)} value={content}placeholder="Content"/>
                    <button onClick={handleSubmit} className="Button">Post</button>
                </div>
            </div>
        </div>
    )

}




export default CreatePost;
