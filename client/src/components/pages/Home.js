import React,{useEffect} from 'react';
import Contact from '../contacts/Contact';
import ContactForm from '../contacts/ContactForm';
import {connect } from 'react-redux';
import { loadUser } from '../../actions/authActions'
//import { getContacts } from '../../actions/contactActions.js'
import ContactFilter from '../contacts/ContactFilter';

const Home = ({loadUser}) => {
  useEffect(()=>{
    loadUser()
   // getContacts()
    //eslint-disable-next-line
  },[])
  return (
    <div className='grid-2'>
      <div>
        <ContactForm/>

      </div>
      <div>
        <ContactFilter/>
        <Contact />
      </div>
    </div>
  );
};

export default connect('',{loadUser})(Home);
