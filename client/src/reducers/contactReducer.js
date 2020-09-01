import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_FILTER,
  CLEAR_FILTER,
} from '../actions/types.js';

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Harry white',
      email: 'harry@gmail.com',
      phone: '222-222-222',
      type: 'professional',
    },
    {
      id: '2',
      name: 'Brendan Rodgers',
      email: 'brendan@gmail.com',
      phone: '111-111-111',
      type: 'personal',
    },
    {
      id: '3',
      name: 'Mikel Arteta',
      email: 'Arteta@gmail.com',
      phone: '333-333-333',
      type: 'personal',
    },
  ],
  loading: false,
  current: null,
  filtered: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
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
