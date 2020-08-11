import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInAction } from '../Actions/LoggedIn';
import 'bulma/css/bulma.css';
import './LoginPage.css';




function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    async function handleSubmit(){
        let response = await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })

        })
        let result = await response.json()
        localStorage.setItem('token', result.token)
        if(result.token){
            dispatch(LoggedInAction())
        }
        history.push(`/`)

    }


    return(
             <>
             <div className="Form">
                <div className="field field__1">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="johnDoe@gmail.com "></input>
                    </div>
                </div>

                    <div className="field field__2">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        </div>
                        <p className="control">
                            <button onClick={handleSubmit} className="button is-link">
                                Login
                            </button>
                        </p>
                    </div>
            </div>
             </>

  )
}




export default LoginPage;
