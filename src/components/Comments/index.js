import React from "react";

import { useSelector } from "react-redux";
import { selectComments } from "../../store/details/selectors";
import CommentsDisplay from "./CommentsDisplay";

import { Container } from "react-bootstrap";

export default function Comments() {
  const comments = useSelector(selectComments);
  console.log(comments);
  return (
    <div>
      <Container>
        {comments.map((comment) => {
          return (
            <div>
              <CommentsDisplay
                key={comment.id}
                id={comment.id}
                comment={comment.comment}
                userId={comment.userId}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
