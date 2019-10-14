import React from 'react';
import SignedInSidebar from '../../layouts/SignedInSidebar';

class Dashboard extends React.Component {
    render() {
        return(
            <div className="container">
                <h3 className="center">Dashboard</h3>
                <div className="row">
                    <div className="col s12 m3">
                        <SignedInSidebar />
                    </div>
                    <div className="col s12 m8 offset-m1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt, illum libero consequuntur amet facilis rem sunt incidunt repellendus culpa odit voluptas dicta, architecto tempora officia vel possimus praesentium vitae.
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;