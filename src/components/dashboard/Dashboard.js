import React from 'react'
import RecentContact from './recentContact'
import Notification from './Notification'

const Dashboard = () => {
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

export default Dashboard






