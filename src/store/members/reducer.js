import { GET_ALL_MEMBERS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEMBERS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
