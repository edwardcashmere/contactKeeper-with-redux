import React, { Fragment,useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactItem from '../contacts/ContactItem';
import { getContacts } from '../../actions/contactActions';
import Spinner from '../layouts/Spinner.js';
const Contact = ({ contacts: { contacts, loading, filtered },getContacts }) => {
  useEffect(() =>{
    getContacts()
    //eslint-disable-next-line
  },[])
  if (contacts !== null && !loading && contacts.length === 0) {
    return <h4>Please add some contacts</h4>;
  }
  return (
    <Fragment>
      {contacts !==null && !loading ?
      <TransitionGroup>
      {!loading && filtered !== null
        ? filtered.map((contact) => (
            <CSSTransition key={contact._id} className="item" timeout={700}>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        : contacts.map((contact) => (
          <CSSTransition key={contact._id} className="item" timeout={700}>
            <ContactItem contact={contact}  />
          </CSSTransition>
          ))}
    </TransitionGroup>: < Spinner/>}
      
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps,{ getContacts })(Contact);
