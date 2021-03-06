import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export default function HomepageDisplay(props) {
  const extractedRatings = Object.values(props.rating).map((keys, values) => {
    return parseInt(props.rating[values].rating);
  });

  const avarageRating = Math.round(
    extractedRatings.reduce(add, 0) / extractedRatings.length
  );

  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <div>
      <Container>
        <Card bg="secondary" text="light" border="danger">
          <Card.Body className="text-center">
            <Nav.Link as={NavLink} to={`/books/${props.id}`}>
              <Card.Img
                style={{ height: "100px" }}
                variant="right"
                src={props.imageUrl}
                className="mb-3"
              />
            </Nav.Link>
            {avarageRating ? (
              <Card.Subtitle>Rating: {avarageRating}</Card.Subtitle>
            ) : null}
            <Card.Title>{props.title}</Card.Title>
            <Card.Title>{props.author}</Card.Title>
            <Card.Text>Chosen by: {props.user.name}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
