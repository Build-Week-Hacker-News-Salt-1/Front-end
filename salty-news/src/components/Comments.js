import React, {useState, useEffect} from "react";

const Comments = ({feed, savedComments, setSavedComments}) => {
  //console.log(props);
  return (
    <div>
      {feed.map(comment => {
        return (
          <div key={comment.id}>
            <h2>{comment.by}</h2>
            <p>{comment.text}</p>
            { localStorage.getItem("token") && (
              savedComments.includes(comment.id)
              ? // if already saved
              <button onClick={() => {
                let saved = [...savedComments];
                saved.splice(savedComments.indexOf(comment.id), 1);
                setSavedComments(saved);
              }}>Unsave</button>
              : // else
              <button onClick={() => {
                setSavedComments([...savedComments, comment.id])
              }}>Save</button>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
