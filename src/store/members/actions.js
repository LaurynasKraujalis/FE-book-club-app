import axios from "axios";
import { apiUrl } from "../../config/constants";

import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const GET_ALL_MEMBERS_SUCCESS = "GET_MEMBERS_BOOKS_SUCCESS";

const allMembersSuccess = (allMembers) => {
  return {
    type: GET_ALL_MEMBERS_SUCCESS,
    payload: allMembers,
  };
};

export const getAllMembers = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/members`);
      console.log(response.data);
      dispatch(allMembersSuccess(response.data));
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

export const GET_ALL_BOOKS_BY_USER = "GET_ALL_BOOKS_BY_USER";

const allBooksByUser = (allBooksByUser) => {
  return {
    type: GET_ALL_BOOKS_BY_USER,
    payload: allBooksByUser,
  };
};

export const getAllBooksByUser = (name) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    console.log(`whats name`, name);
    try {
      const response = await axios.get(`${apiUrl}/members/booksbyuser/${name}`);
      console.log(response.data);
      dispatch(allBooksByUser(response.data));
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
