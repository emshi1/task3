import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks className = 'navbar-nav'/>
    return (
        <nav className = 'navbar navbar-expand-lg  navbar-dark bg-dark'>
            <span className = 'email'>{auth.email}</span>
            {links}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);