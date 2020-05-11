import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const storeNewBook = (id, author, title, imageUrl, description) => ({
  type: "STORE_NEW_BOOK",
  payload: { id, author, title, imageUrl, description },
});

export const clearNewBook = () => ({
  type: "CLEAR_NEW_BOOK",
});

export const postNewBook = (author, title, imageUrl, description) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const authorString = author.join(", ");
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/newbook`,
        {
          author: authorString,
          title,
          imageUrl,
          description,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, "New book posted!", 3000)
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
        dispatch(appDoneLoading());
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
        dispatch(appDoneLoading());
      }
    }
  };
};
