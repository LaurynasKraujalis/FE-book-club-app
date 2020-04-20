import React from "react";
import { Container, Card } from "react-bootstrap";

export default function HomepageDisplay(props) {
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
            <Card.Title>{props.author}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
