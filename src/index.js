import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Redux stuff
import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './config/firebaseConfig'

firebase.initializeApp(firebaseConfig)

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        reduxFirestore(firebase)
        )
    );

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
         <App /> 
         </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
