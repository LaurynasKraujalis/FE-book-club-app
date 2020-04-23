import React from "react";
import { useDispatch } from "react-redux";

import { storeNewBook } from "../../store/newBook/actions";

import { Container, Card, Button } from "react-bootstrap";

export default function ShowSearch(props) {
  const dispatch = useDispatch();

  const chooseHandler = (id, author, title, imageUrl, description) => {
    dispatch(storeNewBook(id, author, title, imageUrl, description));
  };

  return (
    <div>
      <Container>
        <Card bg="secondary" text="light" border="danger">
          <Card.Body className="text-center">
            {props.volumeInfo.imageLinks ? (
              <Card.Img
                style={{ height: "100px" }}
                variant="right"
                src={props.volumeInfo.imageLinks.thumbnail}
                className="mb-3"
              />
            ) : null}
            {props.volumeInfo.title ? (
              <Card.Title>{props.volumeInfo.title}</Card.Title>
            ) : null}
            {props.volumeInfo.authors ? (
              <Card.Title>{props.volumeInfo.authors.join(", ")}</Card.Title>
            ) : null}

            <Button
              className="mb-2"
              variant="danger"
              onClick={() =>
                chooseHandler(
                  props.id,
                  props.volumeInfo.authors,
                  props.volumeInfo.title,
                  props.volumeInfo.imageLinks.thumbnail,
                  props.volumeInfo.description
                )
              }
            >
              Choose
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
