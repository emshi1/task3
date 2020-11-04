import React from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return (
            <button onClick={props.signOut} className = 'btn btn-link nav-item nav-link'>Log Out</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);