import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ContactItem from '../contacts/ContactItem';
//import {} from '../../actions/contactActions';
const Contact = ({ contacts: { contacts, loading } }) => {
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps)(Contact);
