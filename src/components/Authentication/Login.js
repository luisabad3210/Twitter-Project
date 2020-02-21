import React from 'react';
import '../Authentication/Login.css';
import fire from '../Authentication/Config/Fire';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            logInBtn: true,
            isLoading: null,
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if (action === 'reg') {
            this.setState({
                formTitle: 'Regester New User',
                logInBtn: false,
                fireErrors: ''
            });
        } else {
            this.setState({
                formTitle: 'Login',
                logInBtn: true,
                fireErrors: ''
            });
        }
    }

    render() {

        let errorNotification = this.state.fireErrors ? (<div>{this.state.fireErrors}</div>) : null;

        let submitBtn = this.state.logInBtn ? 
            (<input className='button' type='submit' onClick={this.login} value='Log In'/>) : 
            (<input className='button' type='submit' onClick={this.register} value='Sign Up'/>);

        let login_register = this.state.logInBtn ? 
            (<button className='button' onClick={() => this.getAction('reg')}>Sign Up</button>) :
            (<button className='button' onClick={() => this.getAction('login')}>Back Log In</button>);

        return (
            <div className='login'>
                <div className='login-container'>
                    <div className='top'>
                        <h2>{this.state.formTitle}</h2>
                    </div>

                    <div className='bottom'>
                        <div className='error'>{errorNotification}</div>

                        <form className='form-container'>
                            <div>
                                Email:
                                <input
                                className='email'
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange}
                                name='email'
                                placeholder='Email'
                                />
                            </div>

                            <div>
                                Password:
                                <input
                                className='email'
                                type="text"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name='password'
                                placeholder='Password'
                                />
                            </div>
                            
                        </form>
                            {submitBtn}

                            {login_register}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login