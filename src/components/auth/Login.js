import React from 'react';

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
        //this.props.loginUser(this.state);
    }
    render() {
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
                </form>
            </div>
        )
    }
}

export default Login;