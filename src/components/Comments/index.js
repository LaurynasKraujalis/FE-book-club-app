import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectComments } from "../../store/details/selectors";
import CommentsDisplay from "./CommentsDisplay";

import { postComment } from "../../store/details/actions";

import {
  Card,
  Container,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default function Comments() {
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const allComments = useSelector(selectComments);
  const { id } = useParams();

  allComments.sort(function (a, b) {
    a = new Date(a.createdAt);
    b = new Date(b.createdAt);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const clickPost = (comment, id) => {
    dispatch(postComment(comment, id));
    setClick(!click);
    setComment("");
  };

  return (
    <div>
      <Container>
        <Card>
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              setClick(!click);
            }}
          >
            Leave a comment
          </Button>{" "}
          {click ? (
            <div>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  type="text"
                  placeholder="Leave a comment"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                />
              </InputGroup>
              <Card>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => clickPost(comment, id)}
                >
                  Post!
                </Button>
              </Card>
            </div>
          ) : null}
        </Card>{" "}
      </Container>
      <Container>
        <br />
        Comments
        {allComments.map((comment) => {
          return (
            <CommentsDisplay
              key={comment.id}
              id={comment.id}
              comment={comment.comment}
              userName={comment.userName}
            />
          );
        })}
      </Container>
    </div>
  );
}
