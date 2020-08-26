import React from 'react';
import ProfilePic from '../Images/profile.jpg';
// import Background from '../Images/background.jpg';
import ProfilePost from './ProfilePost';
import ProfileTweets from './ProfileTweets';


class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Luis Abad',
            username: '___UrbanLife___',
            bio: 'Self-motivated developer with a passion for product design. With a keen eye for details, proven experience, imagination and who sees solutions and challenges where others see problems. I am also an out of the box thinker, a disciplined and devoted worker and an individual that is good at sticking to deadlines. ',
            linkedIn: '',
            portfolio: '',
            location: 'Atlanta, Ga',
            joined: 'November 2019',
            born: 'June 5, 1993',
        }
    }
    render() {
        return (
            <div>
                <h3 className='pageTitle' >Profile</h3>
                <hr></hr>
                {/* <img src={Background} width='100' height='100'/> */}
                <div className='backgroundImg'>
                <img className='profilePic' alt="profile pic" src={ProfilePic}/>
                    
                </div>
                <div className='profileInfo'>
                    <div className='userName'>{this.state.name}</div>
                    <div>@{this.state.username}</div>
                    <div className='profileBio'>{this.state.bio}</div>
                    <div className='bellowBio'>
                        <div> Location: {this.state.location}  | Born: {this.state.born}</div>
                        <div>Joined: {this.state.joined}</div>
                    </div>
                    <button className='Btn'>Tweets</button> 
                    <button className='Btn'>Tweets and replies</button> 
                    <button className='Btn'>Media</button> 
                    <button className='Btn'>Likes</button>
                </div>
                <hr></hr>

                <ProfilePost transferPost={this.props.transferPost} />
                <div className='space'></div>
                <hr></hr>
                {this.props.tweets.map((tweets, index) => {
                    return <ProfileTweets 
                        key={index}
                        index={index}
                        tweets={tweets}
                    />
                })}

            </div>
        )
    }
}

export default Profile;