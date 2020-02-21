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
            // console.log(myJson);
            this.setState({articles: myJson.articles});
        });
    }

    render() {
        // console.log(this.state)
        return (
            <div className='trending-container'>
                <div className='trends-for-you'><div>Trends for you</div> <div>Powered by Google News</div></div>
                <hr></hr>
                {this.state.articles.map((item, index) => {
                    return (
                        <div className='trending'>
                        <h5>{item.title}</h5>
                        {/* <img alt='' src={item.urlToImage} width='120' height='120'/> */}
                        <div>{item.description}</div>
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
