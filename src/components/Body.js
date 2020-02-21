import React from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';


class Body extends React.Component {
    render() {
        return (
            <div >
                <div>
                    {this.props.isHomePage ? 
                    <Home 
                        tweets={this.props.tweets} 
                        transferPost={this.props.transferPost}
                    /> : 
                    <Profile
                        tweets={this.props.tweets} 
                        transferPost={this.props.transferPost}
                    /> }
                </div>

                
            </div>
        )
    }
}

export default Body