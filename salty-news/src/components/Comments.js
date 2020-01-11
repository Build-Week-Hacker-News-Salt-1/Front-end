import React from "react";

const Comments = props => {
  console.log(props);
  return (
    <div>
      {props.commentsList.map(note => {
        return (
          <div key={comment.id}>
            <h2>{comment.title}</h2>
            <p>{comment.text}</p>
            <button onClick={() => props.delCommentFn(comment.id)}>del</button>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;