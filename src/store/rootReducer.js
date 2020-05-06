import { combineReducers } from "redux";
import user from "./user/reducer";
import allBooks from "./homepage/reducer";
import newBook from "./newBook/reducer";
import details from "./details/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  appState,
  user,
  allBooks,
  details,
  newBook,
});
