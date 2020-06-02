import React from "react";
import SearchNewBook from "../../components/SearchNewBook";

import { Container } from "react-bootstrap";

export default function NewBook() {
  return (
    <div>
      <Container className="text-center">
        <SearchNewBook />
      </Container>
    </div>
  );
}
