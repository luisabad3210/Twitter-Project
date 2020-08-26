import React from 'react';
import HomeTweets from './HomeTweets';
import HomePost from './HomePost';
import TweetsApi from '../APIs/TweetsApi';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h3 className='pageTitle'>Home</h3>
                <hr></hr>
                <HomePost transferPost={this.props.transferPost} />
                <div className='space'></div>
                <hr></hr>
                {this.props.tweets.map((tweets, index) => {
                    return <HomeTweets 
                        key={index}
                        index={index}
                        tweets={tweets}
                    />
                })}
                <div>Powered by Google News</div>
                <hr></hr>
                <TweetsApi />
            </div>
        )
    }
}

export default Home;