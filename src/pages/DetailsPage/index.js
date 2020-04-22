import React from "react";
import { useSelector } from "react-redux";

import DetailsDisplay from "../../components/DetailsDisplay";
import Comments from "../../components/Comments";
import { selectComments } from "../../store/details/selectors";

import Container from "react-bootstrap/Container";

export default function DetailsPage() {
  const comments = useSelector(selectComments);

  return (
    <div>
      <Container>
        <DetailsDisplay />
        {comments ? <Comments /> : null}
      </Container>
    </div>
  );
}
