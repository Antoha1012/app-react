import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  EDIT_POST,
  REMOVE_POST,
} from "../actions/Posts";
import { postsApi } from "../../services/entities/postsApi";
import { commentsApi } from "../../services/entities/commentsApi";
import { mappingPosts } from "../../helpers/mappingPosts";

export const getAllPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS_REQUEST });

    const postsAndComments = await Promise.all([
      postsApi.getAllPosts(),
      commentsApi.getAllComments(),
    ]);
    const postsWithComments = mappingPosts(postsAndComments);
    setTimeout(() => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: postsWithComments });
    }, 2000);
  };
};

export const editPost = (id, data) => ({
  type: EDIT_POST,
  payload: { id, data },
});

export const removePost = (id) => ({ type: REMOVE_POST, payload: id });
