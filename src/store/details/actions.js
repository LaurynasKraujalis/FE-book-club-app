import axios from "axios";
import { apiUrl } from "../../config/constants";

import { selectUser } from "../user/selectors";

export const BOOK_DETAILS_SUCCESS = "BOOK_DETAILS_SUCCESS";
export const BOOK_RATING_SUCCESS = "BOOK_RATING_SUCCESS";

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

// const rateTheBookSuccess = (ratings) => ({
//   type: BOOK_RATING_SUCCESS,
//   payload: { ratings },
// });

export const rateTheBook = (stars, id) => {
  return async (dispatch, getState) => {
    const rating = parseInt(stars);
    const user = selectUser(getState());

    console.log("what am I sending?", rating, id, user.id);

    try {
      const response = await axios.post(`${apiUrl}/books/${id}`, {
        rating: rating,
        bookId: id,
        userId: user.id,
      });
      console.log("rating response", response.data);

      // dispatch(rateTheBookSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};
