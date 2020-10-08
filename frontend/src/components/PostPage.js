import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AboutCommunity from './AboutCommunity';
import Comment from './Comment';
import './PostPage.css';





function PostPage(){

    const { subreddit, post } = useSelector(state => state.subredditAndPostsReducer)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    useEffect(() => {
        async function fetchData(){

            let response = await fetch(`http://localhost:8080/users/${post.userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            let fullname = await response.json()
            setFirstName(fullname.firstName)
            setLastName(fullname.lastName)


        }
        fetchData();


    },[])

    return (
        <>
            <div className="PostPage">
                <div className="PostPage__Container">
                    <div className="PostPage__PostandComments">
                        <div className="PostPage__Post">
                            <div style={{color: 'rgb(152,155,157)', marginBottom: '10px'}}>r/{subreddit.title} Posted by u/{firstName} {lastName}</div>
                            <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px'}}>Frustrated: Litecoin lacking trustworthy Ambassadors and Social Influencers, ideas?</div>
                            <div style={{marginBottom: '10px'}}>As a long time Litecoin supporter, I've been very disappointed in some of the ambassadors responsible for advancing and sharing the value that it provides. I understand - this is a decentralized currency and we all share in the effort to increase awareness and adoption (nor can we control who supports it). However, the reality is that much of the most high profile community members, the folks that pop up when you go to learn about Litecoin, are irresponsible conspiracists at best, con artists at worst.
                                Everything from Qanon insanity, to bible based time studies, remote "psychic" viewing, to doomsday preppers selling food. Honestly - many of the videos and posts are just disgusting! When many of us started this journey we believed in Charlie and his path toward creating sound digital money. If I was a new user coming into the space and saw the amount of nonsense attached to Litecoin I would run for the hills. If these are the people Litecoin attracts, do you really see everyday Americans and businesses gaining trust?
                                What can we do to inspire more responsible ambassadors and messaging? How else can the community inspire new adoption? What's working with other coins? This post isn't meant to be a complaint, it's to come up with a list of ways to infuse the community with new life and ideally more responsible messaging. By the way - love the Litecoin Foundation partnerships - but they can't do everything. How can WE do more?
                            </div>
                            <div style={{color: 'rgb(135,138,140)', marginBottom: '15px'}}>
                                20 comments
                            </div>
                            <div style={{color: 'rgb(49,115,220)', fontWeight: 'bold'}}>
                                Commenting as Blak06
                            </div>
                            <textarea style={{height: '200px', width:'100%', fontSize: '20px', marginBottom: '20px', padding: '15px'}}></textarea>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </div>
                    </div>
                    <div className="PostPage__About">
                        r/Bitcoin
                        <div>For discussion about Litecoin, the leading cryptocurrency derived from Bitcoin. Litecoin is developed with a focus on speed, efficiency, and wider initial coin distribution through the use of scrypt-based mining.</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PostPage;
