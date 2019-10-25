import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

export class updateContact extends Component {
    state = {
        firstName: null,
        lastName: null,
        telephone: null,
        email: null,
        birthday: null,
        photo: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }

    handleImage = (e) => {
        this.setState({
           photo: [e.target.files[0].name]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        //console.log(this.props)
        const { contactToEdit, auth } = this.props;
        if(!auth.uid) return <Redirect to='/' />
        if(contactToEdit){
            return(
                <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Edit Contact</h5>
                    <div className="input-field">
                        <span className="pink-text">FirstName:</span>
                        <input type="text" id="firstName" onChange={this.handleChange} defaultValue={contactToEdit.firstName}/>
                    </div>
                    <div className="input-field">
                    <span className="pink-text">LastName:</span>
                        <input type="text" id="lastName" onChange={this.handleChange} defaultValue={contactToEdit.lastName}/>
                    </div>
                    <div className="input-field">
                    <span className="pink-text">Phone Number:</span>
                        <input type="text" id="telephone" onChange={this.handleChange} defaultValue={contactToEdit.telephone}/>
                    </div>
                    <div className="input-field">
                    <span className="pink-text">Email:</span>
                        <input type="email" id="email" onChange={this.handleChange} defaultValue={contactToEdit.email}/>
                    </div>
                    <div className="input-field">
                    <span className="pink-text">Birthday (YYYY-MM-DD):</span>
                        <input type="text" id="birthday" onChange={this.handleChange} defaultValue={contactToEdit.birthday}/>
                    </div>
                    <div className="file-field input-field">
                    <div className="btn btn-small">
                        <span>Photo</span>
                        <input type="file" id="photo" onChange={this.handleImage}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" defaultValue={contactToEdit.photo}/>
                    </div>
                    </div>
                    <div className="input-field">
                    <button className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Update</button>
                    <button className="waves-effect waves-light btn-large red">Cancel</button>
                    </div>
                </form>
            </div>
            )
        } else{
        return (
            <div className="container center">Contact is loading please wait....</div>
        )}
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    const id = ownProps.match.params.id;
    const contacts = state.firestore.data.contacts;
    const contact = contacts ? contacts[id] : null;
    return {
        contactToEdit: contact,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'contacts'}
    ])
)(updateContact)
