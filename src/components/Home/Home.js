import React from 'react';
import './Home.css';
import HomeTweets from './HomeTweets';
import HomePost from './HomePost';
import TweetsApi from '../APIs/TweetsApi';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='pageTitle'>Home</div>
                <hr></hr>
                <HomePost transferPost={this.props.transferPost} />
                {/* <hr></hr> */}
                {this.props.tweets.map((tweets, index) => {
                    return <HomeTweets 
                        key={index}
                        index={index}
                        tweets={tweets}
                    />
                })}
                <TweetsApi />
            </div>
        )
    }
}

export default Home;