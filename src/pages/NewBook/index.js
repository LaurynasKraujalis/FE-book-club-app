import React from "react";
import SearchNewBook from "../../components/SearchNewBook";

import { Jumbotron, Container } from "react-bootstrap";

export default function NewBook() {
  return (
    <Container>
      {" "}
      Post a new book
      <SearchNewBook />
    </Container>
  );
}
