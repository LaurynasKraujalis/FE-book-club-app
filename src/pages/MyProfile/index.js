import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../store/user/selectors";

import {
  Col,
  Image,
  InputGroup,
  Button,
  FormControl,
  Container,
  Card,
} from "react-bootstrap";

export default function MyProfile() {
  const user = useSelector(selectUser);
  const [profileImage, setProfileImage] = useState("");
  const [userMotto, setUserMotto] = useState("");
  console.log("image", profileImage);
  console.log("motto", userMotto);

  return (
    <div>
      <Container>
        <Col md="auto">
          Profile image
          <Image src={user.image} fluid />
        </Col>
      </Container>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="danger">New image URL</Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          value={profileImage}
          onChange={(event) => setProfileImage(event.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="danger">Change motto</Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          value={userMotto}
          onChange={(event) => setUserMotto(event.target.value)}
        />
      </InputGroup>

      <Container>
        <Card bg="secondary" text="light" border="danger">
          <Card.Subtitle style={{ color: "black" }}>Your motto</Card.Subtitle>
          <Card.Body className="text-center">
            {user.motto ? <Card.Text>"{user.motto}"</Card.Text> : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
