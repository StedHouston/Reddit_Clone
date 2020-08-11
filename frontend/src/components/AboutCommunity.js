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
            <div className="AboutCard__Members">
                1.5m members
            </div>
        </div>
    )



}





export default AboutCommunity;
