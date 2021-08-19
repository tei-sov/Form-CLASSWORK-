import { createStore } from "redux";
import usersReducer from "./UserReducers";

const Store = createStore(usersReducer);

export default Store;
