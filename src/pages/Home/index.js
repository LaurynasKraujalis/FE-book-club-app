import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllBooks } from "../../store/homepage/actions";
import HomepageDisplay from "../../components/HomepageDisplay";

import { Container } from "react-bootstrap";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Container>
      <HomepageDisplay />
    </Container>
  );
}
