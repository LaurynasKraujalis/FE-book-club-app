import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";

export const logOut = () => ({ type: LOG_OUT });

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    if (token === null) return;

    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }

      dispatch(logOut());
    }
  };
};

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

export const logInThunk = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
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

export const signUpThunk = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

// Update user info

// export const USER_MOTTO_SUCCESS = "USER_MOTTO_SUCCESS";

// const updateUserMottoSuccess = (motto) => ({
//   type: USER_MOTTO_SUCCESS,

// });

export const updateUserMotto = (motto) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/myprofile/motto`,
        { motto, id: user.id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response.data);
      // dispatch(updateUserMottoSuccess(response.data));
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
