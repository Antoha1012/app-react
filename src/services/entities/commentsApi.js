import { API } from "../serviceAPI";

const Comments_API = (API) => {
  const getAllComments = async () => {
    const { data } = await API.api.get("comments");
    return data;
  };

  return {
    getAllComments,
  };
};

export const commentsApi = Comments_API(API);
