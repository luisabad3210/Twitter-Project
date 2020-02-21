import React from 'react'
import ProfilePic from '../Images/profile.jpg';

class HomeTweets extends React.Component {
    render() {
        return (
            <div className='tweets'>
                <div><img className='smallProfilePic'src={ProfilePic} width='40' height='40'/> Luis Abad {this.props.tweets.date}</div>
                
                <div className='tweetBody'>{this.props.tweets.body}</div>
                {this.props.tweets.comments}
                <button className='Btn'>Comment</button>
                <button className='Btn'>Retweet</button>
                {/* {this.props.tweets.likes} */}
                <button className='Btn'>Likes</button>
                <button className='Btn'>Share</button>
                <hr></hr>
            </div>
        )
    }
}

export default HomeTweets;