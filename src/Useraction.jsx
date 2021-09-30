// export const ADD_USER = "ADD_USER";
// export const EDIT_USER = "EDIT_USER";
// export const DELETE_USER = "DELETE_USER";

// export const addUser = (user) => {
//   user.id = Math.random().toString();
//   return (dispatch, state, { getFirestore }) => {
//     const db = getFirestore();
//     db.collection("user")
//       .add(user)
//       .then((docs) => {
//         console.log("called");
//       })
//       .catch((err) => console.log(err));

//     // type: "ADD_CONTACT",
//     // payload: contact,
//   };
// };

// export const EditUser = (user_id, updatedUser) => {
//   updatedUser.id = Math.random().toString();

//   return {
//     type: EDIT_USER,
//     user_id: user_id,
//     updatedUser: updatedUser,
//   };
// };

// export const DeleteUser = (id) => {
//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
// };

// // export const getAllUsers = () => {
// //   return(dispatch,state,{getFirestore}) => {
// //     getFirestore().collection().onSnapshot((Snapshot) => {
// //       let users=[];
// //       snapshot.forEach() =>{
// //         users.push((doc.data())
// //       })

// //       dispatch({
// //         type:'SET_ALL_USERS',
// //         payload:users
// //       })
// //     })
// //   };

// // };

// export const getAllusers = () => {
//   return (dispatch, state, { getFirestore }) => {
//     getFirestore()
//       .collection("users")
//       .onSnapshot((snapshot) => {
//         let users = [];
//         snapshot.forEach((doc) => {
//           users.push(doc.data());
//         });

//         dispatch({
//           type: "SET_ALL_USERS",
//           payload: users,
//         });
//       });
//   };
// };

export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (user) => {
  user.id = Math.random().toString();
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users")
      .add(user)
      .then((docs) => {
        console.log("called");
      })
      .catch((err) => console.log(err));

    // type: "ADD_CONTACT",
    // payload: contact,
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

export const editUser = (updatedUser) => {
  console.log(updatedUser);
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .doc(updatedUser.id)
      .set(updatedUser)
      .then(() => {});
  };
};

export const getAllusers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let users = [];
        snapshot.forEach((doc) => {
          users.push(doc.data());
          console.log(users, doc);
        });

        dispatch({
          type: "SET_ALL_USERS",
          payload: users,
        });
      });
  };
};

// export const getAllUsers = () => {
//   return(dispatch,state,{getFirestore}) => {
//     getFirestore().collection().onSnapshot((Snapshot) => {
//       let users=[];
//       snapshot.forEach() =>{
//         users.push((doc.data())
//       })

//       dispatch({
//         type:'SET_ALL_USERS',
//         payload:users
//       })
//     })
//   };

// };

// export const getAllcontacts = () => {
//   return (dispatch, state, { getFirestore }) => {
//     getFirestore()
//       .collection("contacts")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) => {
//         let contacts = [];
//         snapshot.forEach((doc) => {
//           users.push(doc.data());
//           console.log(users, doc);
//         });

//         dispatch({
//           type: "SET_ALL_CONTACTS",
//           payload: users,
//         });
//       });
//   };
// };
// }
