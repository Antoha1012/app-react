import React, { useState, useEffect, useMemo } from "react";
import PostItem from "../PostItem/PostItem";
import TextField from "@material-ui/core/TextField";

const PostsFilter = ({ posts, lastElement }) => {
  const [filterdPosts, setFiltredPosts] = useState([]);
  const [postFilter, setPostFilter] = useState("");

  const handleChange = (e) => {
    setPostFilter(e.target.value);
  };

  const postsFiltredByInputValue = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.includes(postFilter) || post.body.includes(postFilter)
    );
  }, [postFilter, posts]);

  useEffect(() => {
    if (posts.length !== 0 && postsFiltredByInputValue.length === 0) {
      lastElement.current.style.display = "none";
    } else {
      lastElement.current.style.display = "block";
    }
    setFiltredPosts(postsFiltredByInputValue);
  }, [postsFiltredByInputValue, lastElement, posts]);

  return (
    <>
      <TextField
        label="postsFilter"
        variant="outlined"
        name="postsFilter"
        fullWidth
        onChange={handleChange}
      />
      <ul
        style={{
          display: "grid",
          maxWidth: "80vw",
          gridGap: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {filterdPosts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
};

export default PostsFilter;
