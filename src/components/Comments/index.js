import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectComments } from "../../store/details/selectors";
import CommentsDisplay from "./CommentsDisplay";
import { postComment } from "../../store/details/actions";

import { Container, Button } from "react-bootstrap";

export default function Comments() {
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const allComments = useSelector(selectComments);
  const { id } = useParams();

  const clickPost = (comment, id) => {
    console.log(`whats in clickPost?`, comment, id);
    dispatch(postComment(comment, id));
  };

  return (
    <div>
      <Container>
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            setClick(!click);
          }}
        >
          Leave a comment
        </Button>{" "}
      </Container>
      {click ? (
        <div>
          <input
            type="text"
            placeholder="Leave a comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></input>{" "}
          <Button
            size="sm"
            variant="danger"
            onClick={() => clickPost(comment, id)}
          >
            Post!
          </Button>
        </div>
      ) : null}
      <Container>
        Comments
        {allComments.map((comment) => {
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
