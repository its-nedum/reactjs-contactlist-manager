import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    //console.log(props)
    
    return(
        <ul className="right">
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/create">Create Contact</NavLink></li>
            <li><NavLink to="/contacts">Read Contact</NavLink></li>
            <li><a onClick={props.SignOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">EC</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);