import React from 'react'
import ProfilePic from '../Images/profile.jpg';


class HomePost extends React.Component {
    state = {
        tweet: ''
    }
    render() {
        return (
            <div className='posting'>
                <img alt="profile pic" className='smallProfilePic'src={ProfilePic} width='40' height='40'/>
                <input
                className='postInput'
                type='text'
                placeholder='What`s happening?'
                onChange={(event)=>{
                    let text = event.target.value
                    this.setState({tweet: text})
                }}
                ></input>
                {/* <button className='Btn'>Images</button>
                <button className='Btn'>Gifs</button>
                <button className='Btn'>Emoji</button> */}
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

export default HomePost