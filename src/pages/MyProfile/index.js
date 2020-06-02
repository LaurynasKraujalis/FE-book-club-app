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
  Jumbotron,
} from "react-bootstrap";
import "./index.css";

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
      <Jumbotron>
        <h4>Pimp your profile</h4>
        <p>Add a picture or change your motto!</p>
      </Jumbotron>

      <input
        id="file"
        className="fileSelect"
        type="file"
        accept="image/x-png,image/jpeg,image/gif"
      />
      <button id="button" className="uploadButton" onClick={buttonHandler}>
        Upload
      </button>
      <Container>
        <Col md="auto">
          Profile image
          {user.image ? (
            <Image src={user.image} fluid />
          ) : (
            <Image
              src="https://lh3.googleusercontent.com/proxy/c8caEZVqraeDIvTjfOetJ4Hvs5TWYYLFjDMQ_Q2HqmWQVT1noKLY2ivlFbN0dmgWLtGDOmI06ZCHGR7Dqc8o1ML1"
              fluid
            />
          )}
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
