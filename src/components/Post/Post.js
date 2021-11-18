import { useLocation } from "react-router";
import CommentsList from "../CommentsList/CommentsList";

const Post = () => {
  const location = useLocation();
  const { userId, body, title, comments, id } = location.state;
  return (
    <div>
      <div>Author: {userId}</div>
      <div>Title {title}</div>
      <div>{body}</div>
      <h5>Comments</h5>
      <CommentsList comments={comments} />
    </div>
  );
};

export default Post;
