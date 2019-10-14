import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInSidebar = () => {
    return(
        <div className="section pink lighten-1">
                <ul>
                    <li><NavLink to="/">Create Contact</NavLink></li>
                    <li><NavLink to="/">Read Contact</NavLink></li>
                    <li><NavLink to="/">Update Contact</NavLink></li>
                    <li><NavLink to="/">Delete Contact</NavLink></li>
                </ul>
        </div>
    )
}

export default SignedInSidebar;