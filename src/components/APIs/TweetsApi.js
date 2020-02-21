import React from 'react';
import BitcoinImg from '../Images/bitcoin.png';

class TweetsApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        }
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6107f6de55684cbab80484c839fbee1e')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            this.setState({tweets: myJson.articles});
        });
    }

    render() {
        return (
            <div>
                {this.state.tweets.map((item, index) => {
                    return (
                        <div className='tweets'>
                            <img className='bitcoinImg'src={BitcoinImg} width='50' height='50'/> Bitcoin {item.publishedAt}
                            <div className='title'>{item.title}</div>
                            {/* <div>{item.url}</div> */}
                            <img className='TweetImg' alt='' src={item.urlToImage} width='400' height='400'/>
                            <div className='tweetBody' >{item.description}</div>
                            <button className='Btn'>Comment</button>
                            <button className='Btn'>Retweet</button>
                            <button className='Btn'>Like</button>
                            <button className='Btn'>Share</button>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TweetsApi