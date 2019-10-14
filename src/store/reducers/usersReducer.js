const initState = {
    users:[
        {id: 1, name: 'Chinedu Emesue', lastSeen: '14th October, 2019'},
        {id: 2, name: 'Abraham Oganah', lastSeen: '2nd September, 2019'},
        {id: 3, name: 'Manasseh Omachonu', lastSeen: '15th November, 2019'}
    ]
}

const usersReducer = (state = initState, action) => {
    return state
}

export default usersReducer