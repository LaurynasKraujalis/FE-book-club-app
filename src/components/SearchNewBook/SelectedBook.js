import React from "react";
import { useDispatch } from "react-redux";

import { Container, Card, Button } from "react-bootstrap";

export default function SelectedBook(props) {
  const dispatch = useDispatch();

  // const chooseHandler = (id, author, title, imageUrl) => {
  //   dispatch(storeNewBook(id, author, title, imageUrl));
  // };

  return (
    <div>
      <Container>
        <Card>
          <Card.Body className="text-center">
            <Card.Img
              style={{ height: "100px" }}
              variant="right"
              src={props.imageUrl}
              className="mb-3"
            />
            <Card.Title>{props.title}</Card.Title>
            <Card.Title>{props.author.join(", ")}</Card.Title>

            <Button
              className="mb-2"
              variant="success"
              // onClick={() =>
              //   chooseHandler(
              //     props.id,
              //     props.author,
              //     props.title,
              //     props.imageUrl
              //   )
              // }
            >
              Post
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
