import React from 'react'
import ListContact from './listContact'
import { connect } from 'react-redux'

const readContact = (props) => {
    //console.log(props)
    const { contacts } = props
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
        contacts: state.contact.contacts
    }
}
export default connect(mapStateToProps)(readContact)
