const initState = {
    contacts: [
        {id: '1', firstName: 'Chinedu', lastName: 'Emesue', telephone: '08188303092', email:'nwa@yahoo.com', birthday: '08/17/2000', photo:'nedum.jpeg'},
        {id: '2', firstName: 'James', lastName: 'Kayla', telephone: '07023456781', email:'james@gmail.com', birthday: '10/1/2009', photo:'james.jpeg'},
        {id: '3', firstName: 'Andrew', lastName: 'Myra', telephone: '08056789234', email:'myra@hotmail.com', birthday: '06/7/2001', photo:'myra.jpeg'}
    ]
}

const contactReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_CONTACT':
            console.log('contact created', action.contact)
            return state;
        case 'CREATE_CONTACT_ERROR':
            console.log('create contact error', action.err)
            return state;
        default:
            return state;
    }
}

export default contactReducer;