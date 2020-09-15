import React, { useState,useEffect } from 'react';
import { connect }  from 'react-redux';
import { setAlert} from '../../actions/alertactions.js';
import { login,clearErrors,loadUser } from '../../actions/authActions.js';

const Login = ({login,setAlert,isAuthenticated,error,clearErrors,history,token,loadUser}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    if(isAuthenticated ){
      history.push('/')
    }
    if(token){
      loadUser()
    }

    if(error === 'Invalid Credentials'){
      setAlert('Invalid Credentials','danger')
      clearErrors()
    }
    //eslint-disable-next-line
  },[error,isAuthenticated,history])
  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setAlert('Fields cannot be empty','danger');
      clearErrors()
    }else{
      login({email,password})
    };
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary" >Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  error: state.auth.error
})
export default connect(mapStateToProps,{setAlert,login,clearErrors,loadUser})(Login);
