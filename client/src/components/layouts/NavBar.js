import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions.js'
import { clearContacts } from '../../actions/contactActions.js'

const NavBar = ({ title, icon, isAuthenticated,user,logout,clearContacts }) => {
  const onLogout =()=>{
      logout()
      clearContacts();
  }
  const authLinks = (
    <Fragment>
        
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
            {user && user.name}
      </li>
      <li>
          <a href="#!" onClick={onLogout}>
              <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
          </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="bg-primary navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
NavBar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});
export default connect(mapStateToProps,{logout,clearContacts})(NavBar);
