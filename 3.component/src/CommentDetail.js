import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.pic} alt="no-img"></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.commentedTime}</span>
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
