import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";

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
    console.log(
      `what am I posting?`,
      authorString,
      title,
      imageUrl,
      description,
      user
    );
    try {
      const response = await axios.post(`${apiUrl}/newbook`, {
        author: authorString,
        title,
        imageUrl,
        description,
        userId: user.id,
      });

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
