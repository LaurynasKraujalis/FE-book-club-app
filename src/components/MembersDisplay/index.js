import React, { useState } from "react";

import { Container, Card, Button } from "react-bootstrap";

export default function MembersDisplay(props) {
  const [booksExpand, setBooksExpand] = useState(false);
  const allBookTitles = props.allBooks.map((book) => {
    return book.title;
  });

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
              onClick={() => setBooksExpand(!booksExpand)}
            >
              Books chosen by {props.name}
            </Button>
            {booksExpand ? (
              <Card.Text>{allBookTitles.join(", ")}</Card.Text>
            ) : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
