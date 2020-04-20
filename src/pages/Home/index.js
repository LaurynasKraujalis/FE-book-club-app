import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomepageDisplay from "../../components/HomepageDisplay";
import { getAllBooks } from "../../store/homepage/actions";
import { selectAllBooks } from "../../store/homepage/selectors";

import { Container } from "react-bootstrap";

export default function Homepage() {
  const dispatch = useDispatch();
  const allBooks = useSelector(selectAllBooks);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Container>
      {" "}
      {allBooks.map((book) => {
        return (
          <HomepageDisplay
            key={book.id}
            id={book.id}
            author={book.author}
            imageUrl={book.imageUrl}
            title={book.title}
          />
        );
      })}
    </Container>
  );
}
