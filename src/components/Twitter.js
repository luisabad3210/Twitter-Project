import React from 'react';
import Body from '../components/Body';
import fire from './Authentication/Config/Fire';
import TrendingApi from '../components/APIs/TrendingApi';
import Calendar from './Calendar/Calendar';



function createNewTweets(date, body, comments, likes) {
    return {
        date,
        body,
        comments,
        likes,
    };
}

class Twitter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isHomePage: true,
            index: null,
            tweets: [
            createNewTweets('Feb 20 2020', 'Welcome to my twitter project. Feel free to explore around by checking out my profile, what’s trending, and scrolling through bitcoins tweets. Trending section and bitcoin tweets are both powered by googles news api. Btw the tweets in my profile are random tweets by Elon Musk lol.', []),
            createNewTweets('Feb 10 2020', 'Tesla April company talk will be from our Giga New York factory, where we make SolarGlass & several other products. Will also offer customer & media tours.', []),
            createNewTweets('Feb 9 2020', 'All things in moderation, especially etymology', []),
            createNewTweets('Feb 6 2020', 'Late night tweets … sigh', []),
            createNewTweets('Feb 6 2020', 'Hard to believe that is high efficiency solar power seamlessly integrated into beautiful roof tiles. Great work by SolarGlass engineering, Giga NY factory & Tesla installation teams!', []),
            createNewTweets('Feb 4 2020', 'Please let us know what improvements we can make to any aspect of Tesla SolarGlass roof! Critical feedback is much appreciated.', []),
            ]
        }
        }

        logout = () => {
            fire.auth().signOut()
        }

        changeToProfile = () => {
            this.setState({isHomePage: false})
        }

        changeToHome = () => {
            this.setState({isHomePage: true})
        }

    render() {
        return (
        <div className='twitter'>
            <div className='nav'>
                <div className='nav-container'>
                    <h1>Twitter</h1>
                    <div className='buttonContainer'>
                        <div><button className='navBtn'onClick={this.changeToHome}>Home</button></div>
                        <div><button className='navBtn'>Explore</button></div>
                        <div><button className='navBtn'>Notification</button></div>
                        <div><button className='navBtn'>Messages</button></div>
                        <div><button className='navBtn'>Bookmarks</button></div>
                        <div><button className='navBtn'>List</button></div>
                        <div><button className='navBtn' onClick={this.changeToProfile}>Profile</button></div>
                        <div><button className='navBtn'>More</button></div>
                        <button className='logoutBtn' onClick={this.logout}>LogOut</button>
                    </div>
                </div>
            </div>
    
            <Body
            isHomePage={this.state.isHomePage}
            tweets={this.state.tweets}
            transferPost = {(text) => {
                let add = createNewTweets(new Date().toDateString(), text, [], 0);
                let x = this.state.tweets
                x.unshift(add);
                this.setState({tweets: x});
            }}
            />

    

            <div className='right'>
                <div><input className='search-bar' placeholder='Search Twitter'></input></div>
                <Calendar />
                <TrendingApi />
            </div>
        </div>
        )
    }
}


export default Twitter