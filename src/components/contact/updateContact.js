import React, { Component } from 'react'

export class updateContact extends Component {
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Edit Contact</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="telephone">Phone Number</label>
                        <input type="text" id="telephone" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" id="birthday" />
                    </div>
                    <div className="file-field input-field">
                    <div className="btn btn-small">
                        <span>Photo</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                    </div>
                    <div className="input-field">
                    <button className="waves-effect waves-light btn-large">Update</button>
                    <button className="waves-effect waves-light btn-large red">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default updateContact
