import React from 'react';
import './SubredditHeader.css'




function SubredditHeader(props){
    let subreddit = props.subreddit;

    return (
        <div className="Subreddit">
            <img className="Subreddit__banner" src={subreddit.bannerUrl} alt=""/>
            <div className="Subreddit__title">
                <img className="Subreddit__title--icon" src={subreddit.profileUrl} alt=""/>
                <div className="Subreddit__title--text1">{subreddit.title}
        <div className="Subreddit__title--text2">r/{subreddit.title}</div>
                </div>
            </div>
        </div>
    )






}
export default SubredditHeader;
