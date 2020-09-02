import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import { setAlert} from '../../actions/alertactions.js';
import { register, clearErrors} from '../../actions/authActions.js';

const Register = ({setAlert,register,error,clearErrors,isAuthenticated,history}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if(name ==='' || email ==='' || password ==='' || password2 === ''){
      setAlert('Fields cannot be empty','danger')
    }else if(password !== password2){
      setAlert('passwords do not match','danger')
    }else{
      register({name,email,password})
    }
    
  };
  useEffect(()=>{
    if(isAuthenticated){
      history.push('/');
    }
    if(error ==='user with this email already exists'){
      setAlert(error,'danger'); 
      clearErrors()
  //eslint-disable-next-line  
    }},[error,isAuthenticated,history])
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary" >Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state)=>({
  error:state.auth.error,
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,register,clearErrors})(Register);
