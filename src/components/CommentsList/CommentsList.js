import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import { MapStateToProps } from "react-redux";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <CommentItem comment={comment} key={comment.id} />
  ));
};

export default CommentsList;
