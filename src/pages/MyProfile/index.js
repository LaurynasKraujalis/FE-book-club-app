import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import { updateUserMotto, updateUserImage } from "../../store/user/actions";

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
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [userMotto, setUserMotto] = useState("");

  const mottoHandler = (motto) => {
    dispatch(updateUserMotto(motto));
  };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      dispatch(updateUserImage(reader.result));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const buttonHandler = () => {
    document.getElementById("button").addEventListener("click", function () {
      const files = document.getElementById("file").files;
      if (files.length > 0) {
        getBase64(files[0]);
      }
    });
  };

  return (
    <div>
      <input id="file" type="file" accept="image/x-png,image/jpeg,image/gif" />
      <button id="button" onClick={buttonHandler}>
        Upload
      </button>
      <Container>
        <Col md="auto">
          Profile image
          <Image src={user.image} fluid />
        </Col>
      </Container>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="danger" onClick={() => mottoHandler(userMotto)}>
            Change motto
          </Button>
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
