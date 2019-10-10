import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-3">
                <div className="container">
                    <a className="brand-logo">Contact List Manager</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;