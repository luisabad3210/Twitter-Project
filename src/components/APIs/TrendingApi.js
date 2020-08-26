import React from 'react';

class TrendingApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6107f6de55684cbab80484c839fbee1e')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({articles: myJson.articles});
        });
    }

    render() {
        // console.log(this.state)
        return (
            <div className='trending-container'>
                <div className='trends-for-you'><h2>Whats Happening</h2> <div>Powered by Google News</div></div>
                <hr></hr>
                {this.state.articles.map((item, index) => {
                    return (
                        <div key={index} className='trending'>
                        <h5 className="trendingTitle">{item.title}</h5>
                        {/* <img alt='' src={item.urlToImage} width='120' height='120'/> */}
                        <div className="trendingBody">{item.description}</div>
                        <form action={item.url}>
                            <button className='Btn' type="submit">Read More</button>
                        </form>
                        <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TrendingApi
