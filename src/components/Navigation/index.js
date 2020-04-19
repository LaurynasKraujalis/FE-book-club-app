import React from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarItem from "./NavbarItem";
import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/newbook" linkText="Post new book" />
          <NavbarItem path="/profile" linkText="My profile" />

          {token ? null : <NavbarItem path="/login" linkText="Log in" />}

          {token ? (
            <Button onClick={() => dispatch(logOut())}>Logout</Button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  );
}
