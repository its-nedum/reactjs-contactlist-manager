import React from 'react'
import ListContact from './listContact'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const readContact = (props) => {
    //console.log(props)
    const { contacts, auth } = props
    if(!auth.uid) return <Redirect to='/' />
    return (
        <div className="container section">
            {contacts && contacts.map(contact => {
                return(
                    <ListContact contact={contact} key={contact.id}/>
                )
            })} 
        </div>
    )
}
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        contacts: state.firestore.ordered.contacts,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'contacts' }
    ])
)(readContact)
