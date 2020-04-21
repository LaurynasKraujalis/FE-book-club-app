import React from "react";
import { useDispatch } from "react-redux";

import { postNewBook } from "../../store/newBook/actions";

import { Container, Card, Button } from "react-bootstrap";

export default function SelectedBook(props) {
  const dispatch = useDispatch();

  const postHandler = (author, title, imageUrl, description) => {
    console.log(`descri?`, description);
    dispatch(postNewBook(author, title, imageUrl, description));
  };

  return (
    <div>
      <Container>
        <Card bg="secondary" text="light">
          <Card.Body className="text-center">
            <Card.Img
              style={{ width: "60%" }}
              variant="right"
              src={props.imageUrl}
              className="mb-3"
            />
            <Card.Title>{props.title}</Card.Title>
            <Card.Title>{props.author.join(", ")}</Card.Title>

            <Button
              className="mb-2"
              variant="danger"
              onClick={() =>
                postHandler(
                  props.author,
                  props.title,
                  props.imageUrl,
                  props.description
                )
              }
            >
              Post
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
