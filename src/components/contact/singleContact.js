import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const singleContact = (props) => {
    //console.log(props)
    const id = props.match.params.id;
    const { singleContact, auth } = props;
    if(!auth.uid) return <Redirect to='/' />
    if(singleContact) {
        return(
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> {singleContact.firstName} {singleContact.lastName}</span>
                    <p className="card-title">Phone Number: {singleContact.telephone}</p>
                    <p className="card-title">Email: {singleContact.email}</p>
                    <p className="card-title">Birthday: {singleContact.birthday}</p>
                    <p className="card-title">Photo: {singleContact.photo}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Contact created</div>
                    <div>{ moment(singleContact.createdAt.toDate()).calendar()}</div>
                    <Link to={'/contacts/' + id + '/edit'} className="waves-effect waves-light btn-small">Edit</Link>
                    <a href={'/'} className="waves-effect waves-light btn-small red">Delete</a>
                </div>
            </div> 
        </div>
        )}else{
        return (
            <div className="container center">Loading contact please wait...</div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    const id = ownProps.match.params.id
    const contacts = state.firestore.data.contacts;
    const contact = contacts ? contacts[id] : null
    return {
      singleContact: contact,
      auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'contacts' }
    ])
)(singleContact)
