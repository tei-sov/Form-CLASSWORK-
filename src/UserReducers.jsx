import { ADD_USER, DELETE_USER, EDIT_USER } from "./Useraction";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state.users, users: [...state.users, action.payload] };
    case DELETE_USER:
      const savedUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      return { ...state, users: savedUsers };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case "SET_ALL_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return { ...state.user, user: [...state.user, action.payload] };

//     case "EDIT_USER":
//       const updatedUser = state.user.map((each_user) => {
//         if (each_user.id === action.user_id) {
//           return { ...each_user, ...action.updatedUser };
//         } else {
//           return each_user;
//         }
//       });
//       return { ...state, user: updatedUser };

//     case "DELETE_USER":
//       let notDeletedUser = state.user.filter((each_item_in_array) => {
//         return each_item_in_array.id !== action.payload;
//       });

//       return { user: notDeletedUser };

//     case "SET_ALL_USERS":
//       console.log(action.payload);
//       return { ...state, users: action.payload };

//     default:
//       return state;
//   }
// };

export default usersReducer;
