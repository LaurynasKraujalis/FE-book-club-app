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

const rateTheBookSuccess = (ratings) => ({
  type: BOOK_RATING_SUCCESS,
  payload: { ratings },
});

export const rateTheBook = (stars, id) => {
  return async (dispatch, getState) => {
    const rating = parseInt(stars);
    const user = selectUser(getState());
    const token = user.token;

    try {
      const response = await axios.post(
        `${apiUrl}/books/${id}/rating`,
        {
          rating: rating,
          bookId: id,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("rating response", response.data);

      dispatch(rateTheBookSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};

export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";

const commentPostSuccess = (comment) => ({
  type: COMMENT_POST_SUCCESS,
  payload: { comment },
});

export const postComment = (comment, id) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const token = user.token;

    try {
      const response = await axios.post(
        `${apiUrl}/books/${id}/comment`,
        {
          comment: comment,
          bookId: id,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New comment posted!", response.data);

      dispatch(commentPostSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};
