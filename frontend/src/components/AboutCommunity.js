import React from 'react';
import './AboutCommunity.css';



function AboutCommunity(props) {

    let subreddit = props.subreddit;


    return(
        <div className="AboutCard">
            <div className="AboutCard__Header">
                About Community
            </div>
            <div className="AboutCard__Description">
                {subreddit.description}
            </div>
        </div>
    )



}





export default AboutCommunity;
