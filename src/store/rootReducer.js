import { combineReducers } from "redux";
import user from "./user/reducer";
import newBook from "./newBook/reducer";

export default combineReducers({
  user,
  newBook,
});
