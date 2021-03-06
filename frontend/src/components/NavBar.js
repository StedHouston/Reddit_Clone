import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import { LoggedOutAction } from '../Actions/LoggedIn';
import { fetchSubreddit } from '../Actions/subreddits';





function NavBar() {
    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.LoggedInReducer.loggedIn)

    const history = useHistory();



    const handleSearch = () => {
        dispatch(fetchSubreddit(inputSearch))

        setInputSearch('')
        history.push(`/`)
    }

    const handleLogout = () => {
        dispatch(LoggedOutAction())
        localStorage.removeItem('token')
    }

    const handleLogin = () => {
        history.push('/login')
    }

    const signUp = () => {
        history.push('/signup')
    }


        return(
            <div className="NavBar">
                <Link to={'/'}>
                    <img className="NavBar__icon" src="/images/reddit_logo_main.jpg" alt=''/>
                </Link>

                <div className="field has-addons">
                    <div className="control">
                        <input className="input NavBar__search" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search for subreddits"/>
                    </div>
                    <div className="control">
                        <button className="button is-info NavBar__searchButton" onClick={handleSearch}>Search</button>
                    </div>
                </div>


                {loggedIn ? <p className="control">
                                <button onClick={handleLogout} className="button is-danger logoutButton">Log Out</button>
                                <a className="linkedin_icon"href="https://www.linkedin.com/in/stedman-houston-97b11213a/">
                                    <img className="linkedin_icon" src="/images/linkedin_icon.png"/>
                                </a>
                                <a href="https://github.com/StedHouston">
                                    <img className="NavBar__github" src="/images/GitHub-icon.png" alt=''/>
                                </a>
                                <a href="https://angel.co/u/stedman-houston">
                                    <img className="NavBar__github" src="/images/angelist_icon.png" alt=''/>
                                </a>
                            </p> : <p className="control sideButtons">
                                        <button onClick={handleLogin} className="button is-link loginButton">Log In</button>
                                        <button onClick={signUp} className="button is-link signupButton">Signup</button>
                                        <a className="linkedin_icon"href="https://www.linkedin.com/in/stedman-houston-97b11213a/">
                                            <img className="linkedin_icon" src="/images/linkedin_icon.png"/>
                                        </a>
                                        <a href="https://github.com/StedHouston">
                                            <img className="NavBar__github" src="/images/GitHub-icon.png" alt=''/>
                                        </a>
                                        <a href="https://angel.co/u/stedman-houston">
                                            <img className="angelist_icon" src="/images/angelist_icon.png" alt=''/>
                                        </a>
                                    </p>}
            </div>
        )




}


export default NavBar;
