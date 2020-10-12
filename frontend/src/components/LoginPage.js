import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInAction } from '../Actions/LoggedIn';
import { loginValidations } from '../utils';
import 'bulma/css/bulma.css';
import './LoginPage.css';




function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])

    async function handleSubmit(){
        let errors = loginValidations(email, password)
        if(errors.length > 0){
            setErrors(errors)
            return;
        }
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

        if(!response.ok){
            let result = await response.json()
            setErrors(result.errors)
            return;
        }
        let result = await response.json()
        console.log(result)
        localStorage.setItem('token', result.token)
        if(result.token){
            dispatch(LoggedInAction(result.id))
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
                        <div className="control">
                            {errors.map(error => <div style={{color: 'red'}} key={error}>{error}</div>)}
                            <button onClick={handleSubmit} className="button is-link">
                                Login
                            </button>
                        </div>
                    </div>
            </div>
             </>

  )
}




export default LoginPage;
