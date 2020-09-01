import React, { useState, useEffect } from 'react';
import {
  addContact,
  updateContact,
  clearCurrent,
} from '../../actions/contactActions';
import { connect } from 'react-redux';

const ContactForm = ({
  addContact,
  updateContact,
  clearCurrent,
  contacts: { current },
}) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current]);
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
      clearCurrent();
    } else {
      addContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === 'personal'}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === 'professional'}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, {
  addContact,
  updateContact,
  clearCurrent,
})(ContactForm);
