import React from 'react';
import { useSelector } from 'react-redux';
import SubredditCards from './SubredditCards';
import { notEmpty } from '../utils';
import './HomePage.css';
import 'bulma/css/bulma.css';




function HomePage(){



    let subreddits = useSelector(state => state.subreddits);

    let subs = subreddits.subreddits;
    console.log(subs)

    if(notEmpty(subreddits)){
        return(
            <div className="B">
                <div className="subredditCards">
                <h1 className="title is-1 CommunityLabel">SUBREDDITS</h1>
                {subs.map(ele =>
                <SubredditCards key={ele.id} subreddit={ele}/>)}
                </div>
            </div>
        )
    }else{
        return(
            <div>...loading</div>
        )

    }





}

export default HomePage;
