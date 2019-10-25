import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends React.Component {
    state = {
        id: null,
        name: null,
        email: null,
        password: null
      }

      handleChange = (e) => {
          this.setState({
            id: Math.random(),
            [e.target.name]: e.target.value,
          })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        this.props.registerUser(this.state)
      }

    render() {
        const { auth } = this.props
        if(auth.uid) return <Redirect to='/dashboard' />
        return(
            <div className="section">
                <form className="white">
                <h3 className="grey-text text-darken-3">SignUp</h3>
                <div className="input-field">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" onChange={this.handleChange} name="firstName" required/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" onChange={this.handleChange} name="lastName" required/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.handleChange} name="email"  required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handleChange} name="password" required/>
                </div>
                <div className="input-field">
                    <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Register</button>
                </div>
                    <p>Already have an account? <a href={'/login'}>SignIn</a></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Register);