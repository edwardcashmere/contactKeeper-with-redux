import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_FILTER,
  CLEAR_FILTER,
  SET_LOADING,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from '../actions/types.js';

const initialState = {
  contacts: null,
  loading: false,
  current: null,
  filtered: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        loading:false,
        contacts:action.payload
      }
    case ADD_CONTACT:
      return {
        ...state,
        loading:false,
        contacts: [action.payload,...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CONTACTS:
      return{
        ...state,
        contacts:null,
        filtered:null,
        current:null,
        error:null
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_FILTER:
        console.log(action.payload)
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const word = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(word) || contact.email.match(word);
        }),
      };
    default:
      return state;
  }
};
