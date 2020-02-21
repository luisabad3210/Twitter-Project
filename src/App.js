import React from 'react';
import './App.css';
import Twitter from './components/Twitter';
import Login from './components/Authentication/Login';
import fire from './components/Authentication/Config/Fire';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.user ? <Twitter /> : <Login />}</div>
      </div>
    );
  }
}


export default App;