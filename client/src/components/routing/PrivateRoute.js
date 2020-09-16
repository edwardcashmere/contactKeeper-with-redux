import React from 'react'
import { connect } from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';


const PrivateRoute = ({component:Component, loading,isAuthenticated,...rest}) => {
    return (
        <Route {...rest} render={props => 
        !isAuthenticated && !loading ? (
            <Redirect to='/login' />
        ):(
            <Component {...props}/>
        )} />
    )
}
const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(PrivateRoute)
