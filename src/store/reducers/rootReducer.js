import {combineReducers} from 'redux'
import authReducer from './authReducer'
import contactReducer from './contactReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    contact: contactReducer,
    users: usersReducer
})

export default rootReducer