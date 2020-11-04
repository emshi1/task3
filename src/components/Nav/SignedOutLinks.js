import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <NavLink to='/Registr' className=' nav-link'>Signup</NavLink>
            <NavLink to='/login' className=' nav-link'>Login</NavLink>
        </div>
    )
}

export default SignedOutLinks;