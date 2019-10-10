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
        this.props.loginUser(this.state);
    }
    render() {
        return(
            <div className="container">
                <h3 className="center">Login</h3>
                <form>
                    <input type="email" onChange={this.handleChange} name="email" placeholder="Enter email address" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="Enter your password" />
                    <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;