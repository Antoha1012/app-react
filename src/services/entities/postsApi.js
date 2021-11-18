import { API } from "../serviceAPI";

const POSTS_API = (API) => {
  const getAllPosts = async () => {
    const { data } = await API.api.get("posts");
    return data;
  };

  return {
    getAllPosts,
  };
};

export const postsApi = POSTS_API(API);
