import { combineReducers } from "redux";
import user from "./user/reducer";
import allBooks from "./homepage/reducer";
import newBook from "./newBook/reducer";
import details from "./details/reducer";

export default combineReducers({
  user,
  allBooks,
  details,
  newBook,
});
