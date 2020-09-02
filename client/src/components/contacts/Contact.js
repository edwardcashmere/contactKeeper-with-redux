import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactItem from '../contacts/ContactItem';
//import {} from '../../actions/contactActions';
const Contact = ({ contacts: { contacts, loading, filtered } }) => {
  if (contacts.length === 0) {
    return <h4>Please add some contacts</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {!loading && filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} className="item" timeout={700}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
            <CSSTransition key={contact.id} className="item" timeout={700}>
              <ContactItem contact={contact}  />
            </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps)(Contact);
