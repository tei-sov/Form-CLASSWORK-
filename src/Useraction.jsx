export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (user) => {
  // user.id = Math.random().toString();

  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users")
      .add(user)
      .then((docs) => {
        console.log("called");
      })
      .catch((err) => console.log(err));

    //   type: ADD_USER,
    //  payload: user,
  };
};

export const EditUser = (user_id, updatedUser) => {
  updatedUser.id = Math.random().toString();

  return {
    type: EDIT_USER,
    user_id: user_id,
    updatedUser: updatedUser,
  };
};

export const DeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
