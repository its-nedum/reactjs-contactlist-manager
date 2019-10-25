const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            //console.log('login was successful!')
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            //console.log('login failed', action.err)
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'SIGNOUT_SUCCESS':
            //console.log('signout successful')
            return state;
        default:
            return state;
    }
  
}

export default authReducer;