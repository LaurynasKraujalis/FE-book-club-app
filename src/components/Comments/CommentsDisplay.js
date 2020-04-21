import React from "react";

import { Card, Container } from "react-bootstrap";

export default function CommentsDisplay(props) {
  return (
    <div>
      <Container>
        Comments:
        <Card bg="secondary">
          <Card.Title>{props.userId}</Card.Title>
          <Card.Body>{props.comment}</Card.Body>
        </Card>
      </Container>
    </div>
  );
}
