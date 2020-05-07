import React from "react";

import { Card, Container } from "react-bootstrap";

export default function CommentsDisplay(props) {
  return (
    <div>
      <Container>
        <Card bg="secondary" text="light">
          <Card.Subtitle style={{ color: "black" }}>
            {props.userName}
          </Card.Subtitle>
          <Card.Body>{props.comment}</Card.Body>
        </Card>
      </Container>
    </div>
  );
}
