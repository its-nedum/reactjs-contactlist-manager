
export const createContact = (contact) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //connect to firebase
        const firestore = getFirestore();
        firestore.collection('contacts').add({
            ...contact,
            authorId: 180,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_CONTACT', contact:contact })
        }).catch( (err) => {
            dispatch({ type: 'CREATE_CONTACT_ERROR', err })
        })
    }
}