import React from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        email: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.SignIn(this.state); 
    }

    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/dashboard' />
        return(
            <div className="container">
                <form className="white">
                    <h3 className="grey-text text-darken-3">SignIn</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={this.handleChange} name="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.handleChange} name="password" />
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Login</button>
                    </div>
                    <div className="center red-text">{authError ? <p>{authError}</p> : null}</div>
                    <p>Don't have an account yet? <a href={'/'}>SignUp</a></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);