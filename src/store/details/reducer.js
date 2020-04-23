import { BOOK_DETAILS_SUCCESS } from "./actions";
// BOOK_RATING_SUCCESS
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_DETAILS_SUCCESS:
      return { ...action.payload };

    // case BOOK_RATING_SUCCESS:
    //   return {
    //     ...state,
    //     ratings: { ...state.ratings, ...action.payload.ratings },
    //   };

    default:
      return state;
  }
};
