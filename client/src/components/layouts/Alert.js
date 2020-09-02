import React from 'react';
import {connect} from 'react-redux';

const Alert = ({alerts}) => {
    return (
        alerts.length > 0 && alerts.map(alert =>(
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
        ))
       )
}
const mapStateToProps=state => ({
    alerts:state.alert
})
export default connect(mapStateToProps) (Alert)
