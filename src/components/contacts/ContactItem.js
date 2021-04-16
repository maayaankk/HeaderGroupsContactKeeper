import React, { useContext } from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contacts/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);

    const { deleteContact, setCurrent, clearCurrent } = contactContext;
    const { name, _id, email, phone, type } = contact

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (type === 'professional' ? 'badge-success' : 'badge-primary')
                    }>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (<li>
                    <EmailIcon className='fas fa-envelope-open' /> {email}
                </li>)}
                {phone && (<li>
                    <PhoneIcon className='fas fa-phone' />{phone}
                </li>
                )}
            </ul>
            <p>
                <button className=" btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
