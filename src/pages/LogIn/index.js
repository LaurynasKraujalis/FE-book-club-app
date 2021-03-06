import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logInThunk } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import { Link, useHistory } from "react-router-dom";
import { Col, Form, Container, Button } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(logInThunk(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="danger" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to="/signup" style={{ color: "red" }}>
          Click here to sign up
        </Link>
      </Form>
    </Container>
  );
}
