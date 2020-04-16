import React from "react";

import { Container, Card, Button } from "react-bootstrap";

export default function ShowSearch(props) {
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

            <Button
              className="mb-2"
              variant="success"
              // onClick={() => cartHandler(props.id)}
            >
              Choose
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
