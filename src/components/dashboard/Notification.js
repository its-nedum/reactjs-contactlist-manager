import React from 'react'

function Notification() {
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="notifications">Birthday Notifications</span>
                    <ul className="notifications">
                        <li>
                            <span className="pink-text">Manasseh Omachonu</span> 
                            <span> is celebrating their birthday on </span>
                            <span className="grey-text note-date">
                                24 October, 2019
                            </span>
                        </li>
                        <li>
                            <span className="pink-text">Amanda Peter</span> 
                            <span> is celebrating their birthday on </span>
                            <span className="grey-text note-date">
                                24 October, 2019
                            </span>
                        </li>
                        <li>
                            <span className="pink-text">Edward Moses</span> 
                            <span> is celebrating their birthday on </span>
                            <span className="grey-text note-date">
                                24 October, 2019
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification
