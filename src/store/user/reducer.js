import {
  LOGIN_SUCCESS,
  LOG_OUT,
  TOKEN_STILL_VALID,
  USER_IMAGE_SUCCESS,
  USER_MOTTO_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case USER_IMAGE_SUCCESS:
      return { ...state, image: action.payload.image };
    case USER_MOTTO_SUCCESS:
      return { ...state, motto: action.payload.motto };

    default:
      return state;
  }
};
