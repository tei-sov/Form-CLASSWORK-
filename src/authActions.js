import { getFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { auth } from "firebase";

export const registerWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        // alert(response);
      })

      .catch((error, response) => {
        console.log(error);
        // alert(error);
      });
  };
};

export const loginWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        // alert(response);
      })

      .catch((error, response) => {
        console.log(error);
        // alert(error);
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopUp(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const LogoutUser = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then((response) => {
        console.log(response);
        // alert(response);
      })

      .catch((error, response) => {
        console.log(error);
      });
  };
};
