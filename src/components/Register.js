import React from 'react';

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
        return(
            <div className="container">
            <h3 className="center">Register</h3>
                <form>
                    <input type="text" onChange={this.handleChange} name="name" placeholder="Enter fullname" required/>
                    <input type="email" onChange={this.handleChange} name="email" placeholder="Enter email address" required/>
                    <input type="password" onChange={this.handleChange} name="password" placeholder="Enter your password" required/>
                    <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;