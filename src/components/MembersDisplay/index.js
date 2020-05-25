import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getAllBooksByUser } from "../../store/members/actions";

import { Container, Card, Button } from "react-bootstrap";

export default function MembersDisplay(props) {
  const [booksExpand, setBooksExpand] = useState(false);
  const dispatch = useDispatch();
  const booksByUserHandler = (userName) => {
    setBooksExpand(!booksExpand);
    dispatch(getAllBooksByUser(userName));
  };

  return (
    <div>
      <Container>
        <Card bg="secondary" text="light" border="danger">
          <Card.Body className="text-center">
            <Card.Img
              style={{ height: "100px" }}
              variant="right"
              src={props.image}
              className="mb-3"
            />
            <Card.Title>{props.name}</Card.Title>

            <Card.Text>- {props.motto}</Card.Text>
            <Button
              variant="danger"
              onClick={() => booksByUserHandler(props.name)}
            >
              Books chosen by {props.name}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
