import React from 'react';
import NavBar from './components/NavBar';
import SubredditHeader from './components/SubredditHeader';
import HomePage from './components/HomePage';
import SubredditPage from './components/SubredditPage';
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';


function App(props) {



    return (
      <BrowserRouter>
        <div>
        {/* <NavBar /> */}
          <Switch>
            <Route path={"/signup"}>
              <NavBar/>
              <Signup/>
            </Route>
            <Route path={`/subreddits/:id/create_post`} exact>
              <NavBar />
              <CreatePost/>
            </Route>
            <Route path={`/subreddits/:id/post/:id`} exact>
              <NavBar />
              <PostPage/>
            </Route>
            <Route path="/subreddits/:id">
              <NavBar />
              <SubredditPage/>
            </Route>
            <Route path="/login">
              <NavBar />
              <LoginPage/>
            </Route>
            <Route path="/" exact>
              <NavBar />
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}





export default App;
