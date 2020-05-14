import axios from "axios";
import { apiUrl } from "../../config/constants";

import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

// BOOK DETAILS

export const BOOK_DETAILS_SUCCESS = "BOOK_DETAILS_SUCCESS";

const bookDetailsSuccess = (bookDetails) => ({
  type: BOOK_DETAILS_SUCCESS,
  payload: bookDetails,
});

export const fetchBookById = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/books/${id}`);

      dispatch(bookDetailsSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        dispatch(appDoneLoading());
      } else {
        console.log(error);
        dispatch(appDoneLoading());
      }
    }
  };
};

// RATINGS

export const BOOK_RATING_SUCCESS = "BOOK_RATING_SUCCESS";

const rateTheBookSuccess = (ratings) => ({
  type: BOOK_RATING_SUCCESS,
  payload: { ratings },
});

export const rateTheBook = (stars, id) => {
  return async (dispatch, getState) => {
    const rating = parseInt(stars);
    const user = selectUser(getState());
    dispatch(appLoading());

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
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(rateTheBookSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          `${response.data.message}`,
          3000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
        dispatch(appDoneLoading());
      } else {
        console.log(error);
        dispatch(setMessage("danger", true, error.message));
        dispatch(appDoneLoading());
      }
    }
  };
};

// COMMENTS

export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";

const commentPostSuccess = (comment) => ({
  type: COMMENT_POST_SUCCESS,
  payload: comment,
  reactions: [],
});

export const postComment = (comment, id) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/books/${id}/comments`,
        {
          comment: comment,
          userName: user.name,
          bookId: id,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      response.data.reactions = [];

      dispatch(commentPostSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          `Successfully left a comment.`,
          3000
        )
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

// REACTIONS

export const REACTION_POST_SUCCESS = "REACTION_POST_SUCCESS";

const reactionPostSuccess = (reaction) => ({
  type: REACTION_POST_SUCCESS,
  payload: reaction,
});

export const postReaction = (reaction, commentId) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/books/:id/comments/reactions`,
        {
          reaction,
          userName: user.name,
          userId: user.id,
          commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(reactionPostSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          `Successfully reacted on a comment.`,
          3000
        )
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};
