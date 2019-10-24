import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class singleContact extends Component {
    render() {
        return (
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Chinedu Emesue </span>
                    <p>Phone Number: 07082632448</p>
                    <p>Email: emesuechinedu@gmail.com</p>
                    <p>Birthday: 17th August 2019</p>
                    <p>My photo yipee!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Created on 24 October, 2019</div>
                    <Link to='/contacts/23/edit' class="waves-effect waves-light btn-small">Edit</Link>
                    <a class="waves-effect waves-light btn-small red">Delete</a>
                </div>
            </div>
            
        </div>
        )
    }
}

export default singleContact
