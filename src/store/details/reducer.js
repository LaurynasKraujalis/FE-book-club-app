import { BOOK_DETAILS_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_DETAILS_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};
