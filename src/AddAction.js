export const ADD_USERS = "ADD_USERS";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const AddAction = (user) => {
  return (dispact, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .add(user)
      .then((docs) => {
        console.log(docs);
      });
  };
};
export const deleteUser = (user_id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .doc(user_id)
      .delete()
      .then(() => {});
  };
};
export const editUser = (updateduser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .doc(updateduser.id)
      .set(updateduser)
      .then(() => {});
  };
};
export const getALLcontact = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .onSnapshot((snapshot) => {
        let user = [];
        snapshot.forEach((doc) => {
          user.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
          type: "SET_ALL_USER",
          payload: user,
        });
      });
  };
};
