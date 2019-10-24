import React, { Component } from 'react'
import Intro from '../review/Intro'
import Register from '../auth/Register'

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m5 offset-m1">
                        <Intro />
                    </div>
                    <div className="col s12 m6">
                        <Register />
                    </div>
                </div> 
            </div>
        )
    }
}

export default Home
