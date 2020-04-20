import axios from "axios";
import { apiUrl } from "../../config/constants";

export const BOOK_DETAILS_SUCCESS = "BOOK_DETAILS_SUCCESS";

const bookDetailsSuccess = (bookDetails) => ({
  type: BOOK_DETAILS_SUCCESS,
  payload: bookDetails,
});

export const fetchBookById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/books/${id}`);
      console.log("RESPONSE FROM THE THUNK", response.data);
      dispatch(bookDetailsSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};
