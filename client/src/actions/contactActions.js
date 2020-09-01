import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  SET_FILTER,
  CLEAR_FILTER,
} from './types';
import { v4 as uuidv4 } from 'uuid';

//add contact
export const addContact = (contact) => {
  contact.id = uuidv4();
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

//delete contact

export const onDelete=(id)=>{
  return{
    type: DELETE_CONTACT,payload:id
  }

}

//set current
export const setCurrent =(contact)=>{
  return{
    type: SET_CURRENT,payload:contact
  }
}

//clear current
export  const clearCurrent =()=>{
  return {
    type: CLEAR_CURRENT
  }
}

//update contact

export const updateContact =(contact)=>{
  return{
      type: UPDATE_CONTACT,payload:contact
  }
}

//filter
export const setFilter =(text)=>{
  console.log(text);
  console.log('action')
  return {
    type:SET_FILTER,payload:text
  }

}
//clear filtere
export const clearFilter=()=>{
  return{
    type:CLEAR_FILTER
  }
}
