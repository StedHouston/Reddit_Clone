import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoggedInAction } from '../Actions/LoggedIn';
import { signupValidations } from '../utils';
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

        let possibleErrors = signupValidations(email, firstName, lastName, userName, password, confirmPassword)

        if(possibleErrors.length > 0){
            setErrors(possibleErrors);
            return;
        }

        let response = await fetch(`https://read-it1.herokuapp.com/signup`, {
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
            dispatch(LoggedInAction(result.id))
        }
        history.push(`/`)

    }


    return(
             <>
                <div className='Form'>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="johndoe@gmail.com"/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">First name</label>
                        <div class="control">
                            <input class="input" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="John" value={firstName}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Last name</label>
                        <div class="control">
                            <input className="input" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Doe"/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control">
                            <input class="input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" onClick={handleSubmit}>Signup</button>
                        </div>
                    </div>
                    {errors ? errors.map(error => <div className="error">{error}</div>) : <div></div>}
                </div>
             </>

  )
}




export default Signup;
