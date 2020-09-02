import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  SET_LOADING,
  CLEAR_ERRORS
} from './types.js';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken.js';

 
export const register=(formData)=>async dispatch=>{
  const config={
    headers:{ 
      "Content-Type": "application/json"
    }

  }
  try {
   dispatch({ type:SET_LOADING})
   const res=await axios.post('http://localhost:8081/api/users',formData,config);

   dispatch({ type:REGISTER_SUCCESS,payload:res.data});
    
  } catch (error) {
    console.log(error)
    dispatch({ type:REGISTER_FAIL,payload:error.response.data.msg})
    
  }
  
    
}
//clear CLEAR_ERRORS
export const clearErrors=()=>{
  return{
    type:CLEAR_ERRORS
  }
};


//login success

//logout success


//load user
export const loadUser=()=>async (dispatch)=>{

  //set global headers
  if(localStorage.token){
    setAuthToken(localStorage.token)
  }

try {
  dispatch({type:SET_LOADING})
  const res =await axios.get('http://localhost:8081/api/auth');
  dispatch({ type:USER_LOADED,payload:res.data})
  
} catch (error) {
  dispatch({ type:AUTH_ERROR,error:error.response.data.msg})
  
}
}

