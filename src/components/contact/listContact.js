import React from 'react'
import { Link } from 'react-router-dom'


const listContact = (props) => {
    //console.log(props)
    const { contact } = props
    return (
        <div className="card z-depth-0 contact-list">
            <div className="card-content">
                <span className="card-title">{contact.firstName} {contact.lastName}</span>
                <span>{contact.telephone}</span>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div className="grey-text">Created on 24 October, 2019</div>
                <Link to='/contacts/23' class="waves-effect waves-light btn-small right-align">Show more</Link>  
            </div>
            
        </div>
    )
}

export default listContact
