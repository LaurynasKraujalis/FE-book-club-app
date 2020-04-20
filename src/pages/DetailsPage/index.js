import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectBookDetails } from "../../store/details/selectors";
import { fetchBookById } from "../../store/details/actions";

import Container from "react-bootstrap/Container";

import { Col, Card } from "react-bootstrap";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookDetails = useSelector(selectBookDetails);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  console.log(bookDetails);

  if (!bookDetails) return <h5>Loading</h5>;

  return (
    <div>
      <Container>
        <Col>
          <Card style={{ width: "65%" }}>
            <Card.Img variant="top" src={bookDetails.imageUrl} alt="" />

            <Card.Body>
              <Card.Title>{bookDetails.title}</Card.Title>
              <Card.Title>{bookDetails.author}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
