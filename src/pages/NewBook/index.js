import React from "react";
import SearchNewBook from "../../components/SearchNewBook";

import { Container } from "react-bootstrap";

export default function NewBook() {
  return (
    <Container className="text-center">
      <SearchNewBook />
    </Container>
  );
}
