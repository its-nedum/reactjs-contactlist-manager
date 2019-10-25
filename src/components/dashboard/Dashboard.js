import React from 'react'
import RecentContact from './recentContact'
import Notification from './Notification'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
    const { auth } = props;
    if(!auth.uid) return <Redirect to='/' />
    return (
        <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <RecentContact />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)






