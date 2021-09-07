import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import usersReducer from "./UserReducers";
import { firestore } from "firebase";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import thunk from "redux-thunk";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import firebase from "./firebase/config";
import { reduxFirestore } from "redux-firestore";

const rootReducer = combineReducers({
  users: usersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firestore)
  )
);

export default Store;
