import usersReducers from "./UserReducers";
import { firebase, firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  usersState: usersReducers,
  firebase: firebaseReducer,
});
