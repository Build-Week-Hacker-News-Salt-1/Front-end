import React, {useState, useEffect} from "react";
import styled from 'styled-components';

let StyledComment = styled.div`
  padding: 10px 20px;
  &:hover {
    background: #e3e3d0;
  }
`;

const Comments = ({feed, savedComments, setSavedComments}) => {
  //console.log(props);
  return (
    <div style={{margin: "0"}}>
      {feed.map(comment => {
        return (
          <StyledComment key={comment.id}>
            <h2>{comment.by}</h2>
            <p style={{textDecoration: "underline"}}>Negativity: {comment.saltiness}</p>
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
          </StyledComment>
        );
      })}
    </div>
  );
};
export default Comments;
