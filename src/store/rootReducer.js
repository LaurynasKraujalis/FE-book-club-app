import { combineReducers } from "redux";
import user from "./user/reducer";
import allBooks from "./homepage/reducer";
import newBook from "./newBook/reducer";
import details from "./details/reducer";
import appState from "./appState/reducer";
import allMembers from "./members/reducer";

export default combineReducers({
  appState,
  user,
  allMembers,
  allBooks,
  details,
  newBook,
});
