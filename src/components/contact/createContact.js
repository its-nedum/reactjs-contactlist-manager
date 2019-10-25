import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createContact } from '../../store/actions/contactActions'
import { Redirect } from 'react-router-dom'

export class CreateContact extends Component {
    state = {
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        birthday: '',
        photo: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    handleImage = (e) => {
        this.setState({
            photo: e.target.files[0].name
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createContact(this.state)
    }

    render() {
        //console.log(this.props)
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create Contact</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="telephone">Phone Number</label>
                        <input type="text" id="telephone" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email (optional)</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="birthday">Birthday (optional)</label>
                        <input type="date" id="birthday" onChange={this.handleChange}/>
                    </div>
                    <div className="file-field input-field">
                    <div className="btn btn-small">
                        <span>Photo</span>
                        <input type="file" onChange={this.handleImage}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                    </div>
                    <div className="input-field">
                    <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (contact) => dispatch(createContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)
