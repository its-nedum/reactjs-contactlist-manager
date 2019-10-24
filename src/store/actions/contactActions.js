
export const createContact = (contact) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //connect to firebase
        dispatch({ type: 'CREATE_CONTACT', contact:contact });
    }
}