import React from 'react'

function Notification() {
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="notifications">Notifications</span>
                    <ul className="notifications">
                        <li>
                            <span className="pink-text">Manasseh Omachonu</span> 
                            <span> Added to your contacts</span>
                            <div className="grey-text note-date">
                            Created on 24 October, 2019
                            </div>
                        </li>
                        <li>
                            <span className="pink-text">Amanda Peter</span> 
                            <span> Added to your contacts</span>
                            <div className="grey-text note-date">
                            Created on 24 October, 2019
                            </div>
                        </li>
                        <li>
                            <span className="pink-text">Edward Moses</span> 
                            <span> Added to your contacts</span>
                            <div className="grey-text note-date">
                            Created on 24 October, 2019
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification
