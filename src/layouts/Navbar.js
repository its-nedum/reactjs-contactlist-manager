import React from 'react';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-3">
                <div className="container">
                    <a className="brand-logo">Contact List Manager</a> 
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;