import axios from "axios";
import { apiUrl } from "../../config/constants";

export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";

const allBooksSuccess = (allBooks) => {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    payload: allBooks,
  };
};

export const getAllBooks = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/`);
      dispatch(allBooksSuccess(response.data));
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
