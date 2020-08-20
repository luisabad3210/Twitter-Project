import React from 'react'
import ProfilePic from '../Images/profile.jpg';

class ProfilePost extends React.Component {
    state = {
        tweet: ''
    }
    render() {
        return (
            <div>
                <img className='smallProfilePic' alt="profile pic" src={ProfilePic} width='40' height='40'/>
                <input
                className='postInput'
                type='text'
                placeholder='What`s happening?'
                onChange={(event)=>{
                    let text = event.target.value
                    this.setState({tweet: text})
                }}
                ></input>
                <button
                className='tweetBtn'
                onClick={() => {
                    this.props.transferPost(this.state.tweet)
                }}
                >Tweet</button>
            </div>
        )
    }
}

export default ProfilePost