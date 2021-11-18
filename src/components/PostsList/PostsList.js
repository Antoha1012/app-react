import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../store/actionCreators/Posts";
import { getMorePosts } from "./../../helpers/getMorePosts";
import { useObserver } from "./../../hooks/useObserver";
import Preloader from "../Preloader/Preloader";
import PostsFilter from "../PostsFilter/PostsFilter";
import RandomNumber from "../RandomNumber/RandomNumber";

const PostsList = () => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const lastElement = useRef();

  const { postsList, isFetching } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const observerCallback = (visiblePosts) => {
    const uploadedPosts = getMorePosts(postsList, visiblePosts);
    if (uploadedPosts) {
      setVisiblePosts((visiblePosts) => [...visiblePosts, ...uploadedPosts]);
    }
  };

  useEffect(() => {
    setVisiblePosts((visiblePosts) => [
      ...postsList.slice(0, visiblePosts.length),
    ]);
  }, [postsList]);

  useObserver(
    lastElement,
    postsList.length !== visiblePosts,
    isFetching,
    observerCallback,
    visiblePosts
  );

  useEffect(() => {
    if (postsList.length !== 0) return;

    const getPosts = async () => {
      await dispatch(getAllPosts());
    };

    getPosts();
  }, []);

  return (
    <>
      <RandomNumber />
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <PostsFilter posts={visiblePosts} lastElement={lastElement} />
        </div>
      )}
      <div
        ref={lastElement}
        style={{ height: "10px", backgroundColor: "red" }}
      ></div>
    </>
  );
};

export default PostsList;
