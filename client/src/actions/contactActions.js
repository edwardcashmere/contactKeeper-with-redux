import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  SET_FILTER,
  CLEAR_FILTER,
  SET_LOADING,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from './types';
import axios from 'axios'

//add contact
export const addContact = (contact)=>async dispatch => {
  const config={
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    dispatch({ type:SET_LOADING});
    const res = await axios.post('http://localhost:8081/api/contacts',contact,config) 
    dispatch({ type:ADD_CONTACT, payload:res.data})
    
  } catch (error) {
    dispatch({ type:CONTACT_ERROR,payload:error.response})
    
  }
};
//get contacts 
export const getContacts = ()=>async dispatch=>{

  try {
    dispatch({ type:SET_LOADING});
    const res =  await axios.get('http://localhost:8081/api/contacts') 
    dispatch({ type:GET_CONTACTS, payload:res.data})
    
  } catch (error) {
    dispatch({ type:CONTACT_ERROR,payload:error.response})
    
  }
};
//clear contacts 
export const clearContacts =()=>{
  return {
    type:CLEAR_CONTACTS
  }
}
//delete contact

export const onDelete=(id)=>async dispatch =>{

try {
  dispatch({ type:SET_LOADING});
  await axios.delete(`http://localhost:8081/api/contacts/${id}`)
  dispatch({ type:DELETE_CONTACT, payload:id})
} catch (error) {
  dispatch({ type:CONTACT_ERROR, payload:error.response})
  
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

export const updateContact =(contact)=>async dispatch =>{
  const config={
  headers:{
    'Content-Type': 'application/json'
  }
}
try {
  dispatch({ type:SET_LOADING});
  const res= await axios.put(`http://localhost:8081/api/contacts/${contact._id}`,contact,config)
  dispatch({ type:UPDATE_CONTACT,payload:res.data})
} catch (error) {
  dispatch({ type:CONTACT_ERROR,payload:error.response})
}
}

//filter
export const setFilter =(text)=>{

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
