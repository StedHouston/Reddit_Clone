import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInAction } from '../Actions/LoggedIn';
import 'bulma/css/bulma.css';
import './Signup.css';




function Signup(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])



    const history = useHistory()
    const dispatch = useDispatch()

    async function handleSubmit(){


        let response = await fetch(`http://localhost:8080/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "password": password,
                "confirmPassword": confirmPassword,
                "userName": userName,
                "email": email
            })

        })

        if(!response.ok){
            let result = await response.json()
            setErrors(result.errors)
            return;
        }
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

                <div className="field field__1">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
                    </div>
                </div>

                <div className="field field__1">
                    <label className="label">First Name</label>
                    <div className="control">
                        <input className="input" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="John"></input>
                    </div>
                </div>

                <div className="field field__1">
                    <label className="label">Last Name</label>
                    <div className="control">
                        <input className="input" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Doe"></input>
                    </div>
                </div>

                <div className="field field__1">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    </div>
                </div>

                    <div className="field field__2">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input className="input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                        </div>
                        <p className="control">
                            <button onClick={handleSubmit} className="button is-link">
                                Signup
                            </button>
                        </p>
                        {errors.map(error => <div className="error">{error}</div>)}
                    </div>
            </div>
             </>

  )
}




export default Signup;
