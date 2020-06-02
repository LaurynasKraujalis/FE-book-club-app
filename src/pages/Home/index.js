import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomepageDisplay from "../../components/HomepageDisplay";
import { getAllBooks } from "../../store/homepage/actions";
import { selectAllBooks } from "../../store/homepage/selectors";

import { Container, Jumbotron } from "react-bootstrap";

export default function Homepage() {
  const dispatch = useDispatch();
  const allBooks = useSelector(selectAllBooks);

  allBooks.sort(function (a, b) {
    a = new Date(a.createdAt);
    b = new Date(b.createdAt);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <main>
      <Jumbotron>
        <h4>Welcome to Scifi Amsterdam!</h4>
        <p>
          Here you can find the book we are currently reading and the previous
          books as well.
        </p>
      </Jumbotron>
      <>
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
                rating={book.ratings}
                user={book.user}
              />
            );
          })}
        </Container>
      </>
    </main>
  );
}
