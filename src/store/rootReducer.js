import { combineReducers } from "redux";
import user from "./user/reducer";
import allBooks from "./homepage/reducer";
import newBook from "./newBook/reducer";

export default combineReducers({
  user,
  allBooks,
  newBook,
});
