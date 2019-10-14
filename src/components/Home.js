import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
    const { users } = props;
    const userList = users.map(user => {
        return(
            <div className="post card" key={user.id}>
                <p>{user.name}</p>
                <p>Last Seen: {user.lastSeen}</p>
            </div>
        )
    })
    return(
        <div className="container">
            <h3 className="center">Home</h3>
            <h5>Most Active Users</h5>
            {userList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(Home);