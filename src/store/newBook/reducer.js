const initialState = {
  id: false,
  author: null,
  title: null,
  imageUrl: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORE_NEW_BOOK":
      return { ...action.payload };

    case "CLEAR_NEW_BOOK":
      return initialState;

    default:
      return state;
  }
};
