import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  EDIT_POST,
  REMOVE_POST,
} from "../actions/Posts";

const initialState = { postsList: [], isFetching: false };

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: [...state.postsList, ...payload],
        isFetching: false,
      };
    case EDIT_POST:
      const { id, data } = payload;

      return {
        ...state,
        postsList: state.postsList.map((item) => {
          if (item.id !== id) return item;

          return { ...item, ...data };
        }),
      };
    case REMOVE_POST:
      return {
        ...state,
        postsList: [...state.postsList.filter((post) => post.id !== payload)],
      };
    default:
      return state;
  }
};

export default postsReducer;
