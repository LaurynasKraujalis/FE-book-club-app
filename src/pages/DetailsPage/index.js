import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

// import { selectBookDetails } from "../../store/details/selectors";
// import { fetchBookById } from "../../store/details/actions";

import DetailsDisplay from "../../components/DetailsDisplay";

import Container from "react-bootstrap/Container";

// import { Col, Card, Dropdown, DropdownButton, Row } from "react-bootstrap";

export default function DetailsPage() {
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const bookDetails = useSelector(selectBookDetails);

  // useEffect(() => {
  //   dispatch(fetchBookById(id));
  // }, [dispatch, id]);

  // console.log(bookDetails);

  return (
    <div>
      <Container>
        <DetailsDisplay />
      </Container>
    </div>
  );
}
