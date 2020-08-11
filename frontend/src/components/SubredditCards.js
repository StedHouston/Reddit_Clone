import React from 'react';
import { Link } from 'react-router-dom';
import './SubredditCards.css';

function SubredditCards(props){


    return(

        <div className="SubredditCard card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="SubredditCard__profileUrl">
                        <img src={props.subreddit.profileUrl} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                <Link to={`/subreddits/${props.subreddit.id}`}>
                    <p className="title is-4">{props.subreddit.title}</p>
                </Link>
                    <p className="subtitle is-6">{`r/${props.subreddit.title}`}</p>
                </div>
            </div>

            <div className="content">
                {props.subreddit.description}
                <br/>
            </div>
        </div>
    )
}




export default SubredditCards;
