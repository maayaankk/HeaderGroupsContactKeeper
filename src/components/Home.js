import React, { useContext, useEffect } from 'react'
import ContactFilter from './contacts/ContactFilter'
import ContactFrom from './contacts/ContactFrom'
import Contacts from './contacts/Contacts'
import AuthContext from '../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next
    }, [])
    return (
        <div className="grid-2">
            <div>
                <ContactFrom />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
