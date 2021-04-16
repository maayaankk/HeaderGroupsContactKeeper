import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactContext from '../context/contacts/contactContext';

const Navbar = ({ title, icon }) => {

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logoutUser, user } = authContext;
    const { clearContacts } = contactContext

    const onLogOut = () => {
        logoutUser();
        clearContacts()
    }
    const authLinks = (
        <Fragment>
            <li>Hello  {user && user.name}</li>
            <li>
                <a onClick={onLogOut} href='#!'>
                    <ExitToAppIcon /> {' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div className='navbar bg-primary'>
            <h1>
                <ContactsIcon />
                Header Group's - Contact Keeper
            </h1>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt"
}


export default Navbar;
