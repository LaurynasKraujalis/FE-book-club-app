import {
  BOOK_DETAILS_SUCCESS,
  BOOK_RATING_SUCCESS,
  COMMENT_POST_SUCCESS,
  REACTION_POST_SUCCESS,
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_DETAILS_SUCCESS:
      return { ...action.payload };

    case BOOK_RATING_SUCCESS:
      return {
        ...state,
        ratings: [...state.ratings, action.payload.ratings],
      };

    case COMMENT_POST_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case REACTION_POST_SUCCESS:
      const newEmojiObj = action.payload;
      const newReactions = state.comments.map((comment) =>
        comment.id === newEmojiObj.commentId
          ? { ...comment, reactions: [...comment.reactions, newEmojiObj] }
          : comment
      );
      return { ...state, comments: newReactions };

    default:
      return state;
  }
};
