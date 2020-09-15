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
    case LOGIN_SUCCESS:
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
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token')
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
      return{
        ...state,
        isAuthenticated:true,
        loading:false,
        user:action.payload,

        

      }
      
    
    default:
      return state;
  }
};
