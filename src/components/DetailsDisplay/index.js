import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectBookDetails } from "../../store/details/selectors";
import { fetchBookById } from "../../store/details/actions";
import Description from "./Description";
import BookRating from "./BookRating";

import Container from "react-bootstrap/Container";

import { Col, Card, Row } from "react-bootstrap";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookDetails = useSelector(selectBookDetails);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  console.log(bookDetails);

  return (
    <div>
      <Container>
        <Row>
          {bookDetails ? (
            <Col md="auto">
              {" "}
              <Card bg="secondary" text="light">
                <Card.Body className="text-center">
                  {" "}
                  <Card.Img
                    style={{ width: "60%" }}
                    variant="right"
                    src={bookDetails.imageUrl}
                    className="mb-3"
                  />
                  <BookRating rating={bookDetails.ratings} />
                  <Card.Title>{bookDetails.title}</Card.Title>
                  <Card.Title>{bookDetails.author}</Card.Title>
                  <Description description={bookDetails.description} />
                </Card.Body>
              </Card>
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  );
}
