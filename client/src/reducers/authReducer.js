import {
  REGISTER_SUCCESS,
  SET_LOADING,
  REGISTER_FAIL,
  LOGOUT,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  AUTH_ERROR
} from '../actions/types.js';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
        isAuthenticated:true,
        loading:false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated:false,
        loading:false,
        user:null,
        token:null,
        error:action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error:null
      }
    case USER_LOADED:
      console.log(action.payload)
      return{
        ...state,
        ...action.payload,
        loading:false,
        

      }
    case AUTH_ERROR:
      return {
        isAuthenticated:false,
        loading:false,
        user:null,
        error:action.payload
      };
      
    
    default:
      return state;
  }
};
