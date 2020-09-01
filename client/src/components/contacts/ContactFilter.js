import React,{useRef,useEffect} from 'react';
import { connect } from 'react-redux';
import { setFilter,clearFilter} from '../../actions/contactActions';

const ContactFilter = ({setFilter,filtered,clearFilter}) => {
    const text=useRef('')
    const onChange=(e)=>{
        if(text.current.value !==''){
            setFilter(e.target.value)
        }else{
            clearFilter()
        }

    }
    useEffect(()=>{
        if(filtered === null){
            text.current.value =''
        }
    })
    return (
        <form>
           <input type="text" ref={text} placeholder="Filter Contacts" onChange={onChange}/> 
        </form>
    )
}

const mapStateToProps = (state)=>({
    filtered:state.contacts.filtered
})

export default connect(mapStateToProps,{setFilter,clearFilter})(ContactFilter);
