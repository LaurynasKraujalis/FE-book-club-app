import axios from "axios";
import { apiUrl } from "../../config/constants";

import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";

const allBooksSuccess = (allBooks) => {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    payload: allBooks,
  };
};

export const getAllBooks = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/`);
      dispatch(allBooksSuccess(response.data));
      dispatch(appDoneLoading());
      console.log(response.data);
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
