import axios from "axios";
import { apiUrl } from "../../config/constants";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

export const logInThunk = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const signUpThunk = (name, email, password) => {
  console.log(`hello?`);
  return async (dispatch, getState) => {
    try {
      console.log(`hi 1`, name, email, password);

      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });
      console.log(response);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
